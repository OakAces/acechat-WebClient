	function help()
	{
		msgTxt =  "Channels are created by joining them and are deleted when they are empty.<br>"; 
		msgTxt += "Channel names may not contain spaces and cannot be longer than 10 characters.<br>";
		msgTxt += "Channels you are in will have an asterisk * before their names in the channel list.<br>";
		msgTxt += "Channels with unread messages will have an exclamation point ! after their names.<br>";
		msgTxt += "Mandatory arguments to commands are denoted by angle brackets &lt;&gt;<br>";
		msgTxt += "Optional arguments to commands are denoted by square brackets []<br>";
		msgTxt += "/user and /server are only available before you log in. /toggleTheme is always available.<br>";
		msgTxt += "All other commands are only available to logged in users.<br><br>";

		//join
		msgTxt += "/join &lt;channel&gt;............................join a channel<br>";

		//part
		msgTxt += "/part [channel]............................leave a channel<br>";

		//logoff
		msgTxt += "/logoff....................................part all channels and quit<br>";

		//logout
		msgTxt += "/logout....................................same as /logoff<br>";

		//msg
		msgTxt += "/msg &lt;UserName&gt; &lt;Message&gt;..................private message a user<br>";

		//whoami
		msgTxt += "/whoami....................................computer aided introspection<br>";

		//invite
		msgTxt += "/invite &lt;user0&gt; [user1]...[usern]..........invite users to the current channel<br>"

		//standard message
		msgTxt += "&lt;message&gt;..................................send message to your current channel<br>";

		//me
		msgTxt += "/me &lt;message&gt;..............................roleplay! emote!<br>";

		//party
		msgTxt += "/party &lt;message&gt;...........................throw a party<br>";

		//user
		msgTxt += "/user &lt;userName&gt;...........................log in (only available to logged out users)<br>";

		//server
		msgTxt += "/server &lt;server&gt;...........................tell AceChat to connect to a non-default server<br>";

		//toggleTheme
		msgTxt += "/toggleTheme...............................toggle between the Light and Dark themes<br>";

		//help
		msgTxt += "/help......................................show this dialog";

		msg = {
						"user" : "AceChat",
						"command" : "SYSTEM",
						"args" : [channel, msgTxt],
						"timestamp" : new Date().getTime()/1000
					};	
		channel.messages.push(msg);
		printChannelMessages(channel);
	}
