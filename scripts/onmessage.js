//recieve data from server, respond accordingly
	sock.onmessage = function(event)
	{
		var msg = JSON.parse(event.data);
		switch(msg.command){ 
			//populate user list
			case "USERLIST":
				usrList = msg.args;
				populateOnlineList();
				break;
			//populate channel list
			case "CHANLIST":
				tmp = msg.args;
				for (c in tmp)
				{
					if (chanInChanList(tmp[c]) == null)
					{
						chanList.push(new channelObj(tmp[c]));
					}
				}
				for (c in chanList)
				{
					if (tmp.indexOf(chanList[c].name) == -1)
						chanList.splice(c,1);
				}
				populateChannelList();
				break;
			//print message to channel
			case "MSG":
				console.log("MSG received");
				var msgTxt = msg.args[1];
				msgTxt = msgTxt.replace(/</g, "&lt;");
				msgTxt = msgTxt.replace(/>/g, "&gt;");
				msg.args[1] = msgTxt;

				//client protocol messages
				if(msgTxt.substring(0,9) == "\\protocol")
				{
					//me
					if(msgTxt.substring(9,12) == "000" & msgTxt.slice(-4) == "\\000")
					{
						msg.args[1] = msgTxt.slice(12,-4);
						msg.command = "ME";
						msg.args[1] = "*"+msg.user+" "+msg.args[1]+"*";
					}

					//party
					else if(msgTxt.substring(9,12) == "001" & msgTxt.slice(-4) == "\\001")
					{
						msg.args[1] = msgTxt.slice(12,-4);
						var tmp = msg.args[1];
						tmp = tmp.replace(/&lt;/g,"<");
						tmp = tmp.replace(/&gt;/g,">");
						var otherTmp="";

						for(var q in tmp)
						{
							otherTmp+= '<div style="display:inline;color:'+randColor()+'">'+tmp[q]+'</div>';
						}
						msg.args[1] = otherTmp;
					}

					//invalid protocol
					else
					{
						//catch invalid protocol messages
						errorHandler("Error -- Invalid Protocol Message");
					}

				}
				channels[getChannel(msg.args[0])].messages.push(msg);
				if(channel.name != channels[getChannel(msg.args[0])].name)
				{
					channels[getChannel(msg.args[0])].newMessage = true;
					populateChannelList();
				}
				if(!focus)
				{
					document.getElementById('title').innerHTML="AceChat - New Message!";
				}
				printChannelMessages(channel);
				break;

			//private message
			case "PRIVMSG":
				var msgTxt = msg.args[1];
				msgTxt = msgTxt.replace(/</g, "&lt;");
				msgTxt = msgTxt.replace(/>/g, "&gt;");
				msg.args[1] = msgTxt;
				for(var i in channels)
				{
					channels[i].messages.push(msg);
				}
				printChannelMessages(channel);
				break;

			//update chanUsrList, populate online channel list
			case "JOIN":
				if(channel == channels[getChannel(msg.args[0])])
				{
					chanUsrList = [];
					for(var k = 1; k < msg.args.length;++k)
						chanUsrList.push(msg.args[k]);
					populateOnlineChannelList();
				}
				var tmp =""+msg.user+" JOINED "+msg.args[0];
				msg.user = "AceChat";
				msg.command="SYSTEM";
				msg.args[1]=tmp;
				channels[getChannel(msg.args[0])].messages.push(msg);
				if(channel == channels[getChannel(msg.args[0])])
					printChannelMessages(channels[getChannel(msg.args[0])]);
				break;

			//update chanUsrList, populate online channel list
			case "PART":
				if(channel == channels[getChannel(msg.args[0])])
				{
					chanUsrList = [];
					for(var k = 1; k < msg.args.length;++k)
						chanUsrList.push(msg.args[k]);
					populateOnlineChannelList();
				}
				var tmp =""+msg.user+" PARTED "+msg.args[0];
				msg.user = "AceChat";
				msg.command="SYSTEM";
				msg.args[1]=tmp;
				channels[getChannel(msg.args[0])].messages.push(msg);
				if(channel == channels[getChannel(msg.args[0])])
					printChannelMessages(channels[getChannel(msg.args[0])]);
				break;

			//accept an invitation
			case "INVITE":
				var tmp = "";
				tmp = "User "+msg.user+" has invited you to channel "+msg.args[0]+"."
				if(channel != channels[getChannel(msg.args[0])])
				{
					joinChannel(msg.args[0]);
					msg = {
										"user" : "AceChat",
										"command" : "SYSTEM",
										"args" : [channel.name, tmp],
										"timestamp" : new Date().getTime()/1000
								};
					channel.messages.push(msg);
					printChannelMessages(channel);
				}
				else
				{
					tmp += " But you're already here!";


					msg = {
										"user" : "AceChat",
										"command" : "SYSTEM",
										"args" : [channel.name, tmp],
										"timestamp" : new Date().getTime()/1000
								};

					channel.messages.push(msg);
					printChannelMessages(channel);
				}
				break;

			//error
			case "ERROR":
				errorHandler(msg.args[0]);
				break;

			//respond to pings from the server
			case "PING":
				msg = {
								"command" : "PONG",
								"args" : []
							};
				send(msg);
				break;
		}
	};
