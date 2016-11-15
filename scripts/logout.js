	function logout()
	{
		createCookie("user","",-1);
		sock.close();
		window.location="login.html";
	}
