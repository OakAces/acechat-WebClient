	//leaves the channel specified by a channelObj
  function part(e)
  {
    var msg = {
								"command" : "PART",
								"args" : [e.name]
							};
    send(msg);

		var tmp = channels.indexOf(e);
		if(tmp > -1)
			channels.splice(tmp,1);
		populateChannelList();
		if(channels.length == 0)
			logout();
		if(channels.indexOf(channel) == -1)
		{
			joinChannel(channels[0].name);
		}
  }

