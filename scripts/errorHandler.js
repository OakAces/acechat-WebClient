	//accepts a string containing an error message. 
	//server errors must be deconstructed in the onmessage function
	function errorHandler(e)
	{
		msg = {
						"user" : "AceChat",
						"command" : "ERROR",
						"args" : [channel,e],
						"timestamp" : new Date().getTime()/1000
					};

		channel.messages.push(msg);
		printChannelMessages(channel);
		
	}

