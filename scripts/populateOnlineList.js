//populates list in top right with list of users logged in to server
function populateOnlineList()
	{
		document.getElementById("online-list").innerHTML="";
		for(var i=0;i<usrList.length;++i)
		{
			var arg = "'/msg ";
			arg += usrList[i];
			arg+=" '";
			var btn = '<button class="online-button" onclick="getElementById(\'chat-prompt\').value='+arg+'; document.getElementById(\'chat-prompt\').focus();"><code>'+usrList[i]+'</code></button>';
			document.getElementById("online-list").innerHTML+=btn+"<br>";
		}
	}
