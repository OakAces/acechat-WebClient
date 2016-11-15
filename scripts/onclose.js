sock.onclose = function()
	{
		document.getElementById("body").innerHTML="<p style='color:white'>Failed to connect to server</p><a href='index.html'>Refresh</a><br><a href='login.html'>Return to login</a>";
	};
