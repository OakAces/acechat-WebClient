	//define channel as local class
	function channelObj(name)
	{
		this.name = name;
		//messages is a list of JSON object messages from the server.
		//client messages must be wrapped in JSON objects
		this.messages = [];
		this.newMessage = false;
	}
