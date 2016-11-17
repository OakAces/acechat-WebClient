	function logout()
	{
		userName="";
		try{
			sock.close();
		}catch(err)
		{}
		location.reload();
	}
