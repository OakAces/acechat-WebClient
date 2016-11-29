function login()
{
	try{
		sock = new WebSocket(server);
	}catch(err)
	{
		disconnect();
	}
	channel = "startHere";
	window.setTimeout(loginA,500);
	window.setTimeout(loginB,2000);
}
function loginA()
{
	document.body.appendChild(document.createElement("script")).src = "scripts/onmessage.js";
	document.body.appendChild(document.createElement("script")).src = "scripts/onclose.js";
}

function loginB()
{
	var usrMsg = {
		"command" : "USER",
		"args" : [userName]
	};
	send(usrMsg); 
	joinChannel("startHere",welcomeMsg());
	requestUsrList();
	requestChanList();
}
