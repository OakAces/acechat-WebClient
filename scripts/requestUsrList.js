	//gets user list from server, returns as array of strings
  function requestUsrList()
  {
		var msg = {
						"command" : "USERLIST",
						"args" : []
							};
		send(msg);
  }
