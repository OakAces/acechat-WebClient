	//accepts a string containing an error message. 
	//server errors must be deconstructed in the onmessage function
	//Attempts to display to current channel, calls window.alert() if channel is null
	function errorHandler(e)
	{
		msg = {
						"user" : "AceChat",
						"command" : "ERROR",
						"args" : [channel,e],
						"timestamp" : new Date().getTime()/1000
					};

		try{
			channel.messages.push(msg);
			printChannelMessages(channel);
		}catch(err)
		{
			window.alert("ERROR: "+e);
		}
		
	}

