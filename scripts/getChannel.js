	//input: channel name (string)
	//output: index of channelObj in channels
	function getChannel(s)
	{
		for(var i in channels)
		{
			if(channels[i].name == s)
				return i;
		}
		return null;
	}
