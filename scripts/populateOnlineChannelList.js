function populateOnlineChannelList() 
	{
		document.getElementById("online-channel-list").innerHTML="";
		for(var i=0;i<chanUsrList.length;++i)
		{
			var arg = "'/msg ";
			arg += chanUsrList[i];
			arg+=" '";
			var btn = '<button class="online-button" onclick="getElementById(\'chat-prompt\').value='+arg+'; document.getElementById(\'chat-prompt\').focus();"><code>'+chanUsrList[i]+'</code></button>';
			document.getElementById("online-channel-list").innerHTML+=btn+"<br>";
		}
	}
