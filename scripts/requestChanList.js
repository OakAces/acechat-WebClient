	//requests chanList from server
	function requestChanList()
  {
    var msg = {
								"command" : "CHANLIST",
								"args" : []
							};
    send(msg); 
  }
