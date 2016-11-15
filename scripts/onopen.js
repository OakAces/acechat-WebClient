sock.onopen= function()
	{
		//login with server
		userName = getCookie("user");
		//must be logged in to access this page
		
		if(userName.toLowerCase() == "acechat"|| !userName.match(/^[A-z0-9]{1,10}$/))
		{
			logout();
		}
		var usrMsg = {
										"command" : "USER",
										"args" : [userName]
								 };
		send(usrMsg);

		joinChannel("startHere",welcomeMsg());
		requestUsrList();
		requestChanList();
	};
