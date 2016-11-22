	var server = "wss://acechat.dyladan.me/ws/"
  var channel = null;
	var userName = "";
	var usrList = [];
	var chanUsrList = [];
  var channels = [];
	var chanList = [];
	var focus = true;
	var theme = "light";
	var sock;

	msg = {
					"user" : "AceChat",
					"command" : "SYSTEM",
					"args" : [null, "Type /user &lt;username&gt; to log in<br>If you would like to join a nondefault server, type /server &lt;server&gt; first<br>The default server is "+ server],
					"timestamp" : new Date().getTime()/1000
				};
	
	printMsg(msg);
	
