	//requests user list from server
  function requestUsrList()
  {
		var msg = {
						"command" : "USERLIST",
						"args" : []
							};
		send(msg);
  }
