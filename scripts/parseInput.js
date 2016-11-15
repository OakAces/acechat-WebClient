
  function parseInput()
  {
    var msgTxt = document.getElementById("chat-prompt").value;
    var msgArr = msgTxt.split(" ");
    var msg;
    document.getElementById("chat-prompt").value = "";

    //msg
		if (msgTxt.match(/^\/msg\s*$/) || msgTxt.match(/^\/msg\s+\S+\s*$/)) 
		{
			errorHandler("/msg must accept at least two arguments");
		}
    //if input begins with /msg validUsrName, send private message
		else if (msgTxt.match(/^\/msg(\s)+/) && !!~usrList.indexOf(msgArr[1]))
    {
      msgArr.shift();
			u = msgArr[0];
      msgArr.shift();
      msgTxt = msgArr.join(" ");
      msg = {
							"command" : "PRIVMSG",
							"args" : [u,msgTxt]
						};
      send(msg);

			msg = {
							"user" : "[PRV] -> "+u,
							"command" : "MSG",
							"args" : [channel.name, msgTxt],
							"timestamp" : new Date().getTime()/1000
						};
			channel.messages.push(msg);
			printChannelMessages(channel);
    }

		//if input begins with /msg invalidUsrName, throw error
		else if (msgTxt.match(/^\/msg(\s|$)/) && !~usrList.indexOf(msgArr[1]))
    {
			errorHandler("Invalid User Name");
    }

		//join
		else if(msgTxt.match(/^\/join\s+[A-z0-9]{1,10}$/))
		{
			msgArr.shift();
			arr = msgArr.join(" ").match(/[^<>]+/);
			joinChannel(arr[0].trim());
		}
		else if(msgTxt.match(/^\/join\s*$/)) 
		{
			errorHandler("/join must accept at least one argument");
		}
		else if(msgTxt.match(/^\/join\s+/)) 
		{
			errorHandler("Invalid channel name");
		}
		
		//part
		else if(msgTxt.match(/^\/part\s+\S+[.]*/))
		{
			msgArr.shift();
			arr = msgArr.join(" ").trim();
			if(channels[getChannel(arr)] != null)
			{
				part(channels[getChannel(arr)]);
			}
			else
				errorHandler("You are not in that channel");
		}
		//part with no args should leave the current channel
		else if(msgTxt.match(/^\/part\s*$/))
		{
			part(channel);
		}

    //logout, logoff
    //**parts all channels**, logs out
		//ideally would part all channels, but it doesn't, and that's okay too.
    else if (msgTxt.match(/^\/logoff(\s|$)/) || msgTxt.match(/^\/logout(\s|$)/))
    {
			logout();
    }

		//whoami
		else if (msgTxt.match(/^\/whoami\s*/))
		{
			msg = {
							"user" : "AceChat",
							"command" : "SYSTEM",
							"args" : [channel.name, userName],
							"timestamp" : new Date().getTime()/1000
						};
			channel.messages.push(msg);
			printChannelMessages(channel);
		}

		//invite with one or more valid usernames
		//tolerates invalid usernames as long as at least one is valid
		else if (msgTxt.match(/^\/invite\s\S+/))
		{
			var atLeastOneValid = false;
			var atLeastOneInvalid = false;
			var sentTo =[];
			msgArr.shift();
			var u =msgArr;
			msgTxt="";

			for (var i in u)
			{
				if(!!~usrList.indexOf(u[i]) && u[i] != userName)
				{
					sentTo.push(u[i]);
					atLeastOneValid = true;
				}
				else
				{
					atLeastOneInvalid = true;
				}
			}

			if(atLeastOneValid)
			{
				if(!atLeastOneInvalid)
				{
					msgTxt = "Successfully invited [";
					for (var i in sentTo)
					{
						msgTxt += sentTo[i];
						msgTxt += ", ";
					}
					msgTxt = msgTxt.slice(0,-2);
					msgTxt += "] to "+channel.name+".";
					msg = {
										"user" : "AceChat",
										"command" : "SYSTEM",
										"args" : [channel.name, msgTxt],
										"timestamp" : new Date().getTime()/1000
								};
					channel.messages.push(msg);
					printChannelMessages(channel);
					sentTo.unshift(channel.name)
					invite(sentTo);
				}
				else
				{
					msgTxt = "Successfully invited [";
					for (var i in sentTo)
					{
						msgTxt += sentTo[i];
						msgTxt += ", ";
					}
					msgTxt = msgTxt.slice(0,-2);
					msgTxt +="] to "+channel.name+". Some users could not be invited.";
					msg = {
										"user" : "AceChat",
										"command" : "SYSTEM",
										"args" : [channel.name, msgTxt],
										"timestamp" : new Date().getTime()/1000
								};
					channel.messages.push(msg);
					printChannelMessages(channel);
					sentTo.unshift(channel.name)
					invite(sentTo);
				}
			}
			else
			{
				errorHandler("Invitation failed");
			}

		}

		//invite with no args
		//fails
		else if (msgTxt.match(/^\/invite(\s)*$/))
		{
			errorHandler("/invite must accept at least one argument");
		}

		//help
		else if (msgTxt.match(/^\/help\s*/))
		{
			help();
		}

		//me
		else if (msgTxt.match(/^\/me\s+\S+/))
		{
			msgArr.shift();
			msgTxt = msgArr.join(" ");
			msgTxt = "\\protocol000"+msgTxt+"\\000";
      msg = {
              "command" : "MSG",
							"args" : [channel.name, msgTxt]
						};
      send(msg);
		}
		else if (msgTxt.match(/^\/me\s*$/))
		{
			errorHandler("/me must accept at least one argument");
		}

		//party!
		else if (msgTxt.match(/^\/party\s+\S+/))
		{
			msgArr.shift();
			msgTxt = msgArr.join(" ");
			msgTxt = "\\protocol001"+msgTxt+"\\001";
      msg = {
              "command" : "MSG",
							"args" : [channel.name, msgTxt]
						};
      send(msg);
		}
		else if (msgTxt.match(/^\/party\s*$/))
		{
			errorHandler("You need more arguments to party!");
		}
		
		//invalid command
		else if (msgTxt.match(/^\/.*/) || msgTxt.match(/^\\.*/))
		{
			errorHandler("Invalid Command");
		}

	  //default, send message to current channel
    else if (msgTxt != "" && msgTxt != null)
		{
      msg = {
              "command" : "MSG",
							"args" : [channel.name, msgTxt]
						};
      send(msg);
    }
  }