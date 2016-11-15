	//invite users to channel
  //args in the form [channel name, user0, user1,..,usern]
  function invite(e)
  {
    var msg = {
								"command" : "INVITE",
								"args" : e
							};
    send(msg);
  }

