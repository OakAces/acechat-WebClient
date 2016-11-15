	//param: channelObj
	function printChannelMessages(e)
	{
		document.getElementById("chat-log").innerHTML="";
		if(e.messages)
		{
			for(var i in e.messages)
			{
				if(e.messages[i].args && e.messages[i].args[1])
				{
					var msgHeader="";
					var msgText="";
					var d = new Date(e.messages[i].timestamp*1000);
					var ts = "" + ("0"+d.getHours()).slice(-2)+":"+("0"+d.getMinutes()).slice(-2)+":"+("0"+d.getSeconds()).slice(-2);
					msgHeader += ts+"  ";
					if(e.messages[i].command=="PRIVMSG")
						msgHeader += "[PRV]";
					if(e.messages[i].command=="ERROR")
						msgHeader += "[ERR]";
					if(e.messages[i].command=="SYSTEM")
						msgHeader += "[SYS]";
					msgHeader += e.messages[i].user+" > ";
					msgText += e.messages[i].args[1];

					if(e.messages[i].command=="ME")
					{
						msgHeader='';
					}
					msgHeader = "<div class=\"msgHeader\"><code>"+msgHeader+"</code></div>";
					var sp    = "<div class=\"spacer\"></div>";
					msgText = "<div class=\"msgText\"><code>"+msgText+"</code></div>";

					document.getElementById("chat-log").innerHTML+="<div class=\"msgRow\">"+msgHeader +sp+ msgText+ "</div>";
					document.getElementById("chat-log").innerHTML+="<div class=\"msgRow\"><div class=\"spacer\"><br></div><div class=\"spacer\"><br></div></div>";

				}
			}
			document.getElementById("chat-log-wrapper").scrollTop=document.getElementById("chat-log-wrapper").scrollHeight;
		}

		if(!focus)
		{
			document.getElementById('title').innerHTML="AceChat - New Message!";
		}
		
	}
