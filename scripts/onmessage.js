//recieve data from server
	sock.onmessage = function(event)
	{
		var msg = JSON.parse(event.data);
		//do something
		switch(msg.command){ 
			case "USERLIST":
				usrList = msg.args;
				populateOnlineList();
				break;
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
			case "MSG":
				var msgTxt = msg.args[1];
				msgTxt = msgTxt.replace(/</g, "&lt;");
				msgTxt = msgTxt.replace(/>/g, "&gt;");
				msg.args[1] = msgTxt;
				//client protocol messages
				if(msgTxt.substring(0,9) == "\\protocol")
				{
					if(msgTxt.substring(9,12) == "000" & msgTxt.slice(-4) == "\\000")
					{
						//me
						msg.args[1] = msgTxt.slice(12,-4);
						msg.command = "ME";
						msg.args[1] = "*"+msg.user+" "+msg.args[1]+"*";
					}
					else if(msgTxt.substring(9,12) == "001" & msgTxt.slice(-4) == "\\001")
					{
						//PARTY!
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
				printChannelMessages(channel);
				break;
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
			case "ERROR":
				errorHandler(msg.args[0]);
				break;
			case "PING":
				msg = {
								"command" : "PONG",
								"args" : []
							};
				send(msg);
				break;
		}
	};
