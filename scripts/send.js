  //sends object to sever
  function send(e)
  {
		sock.send(JSON.stringify(e));
	}
