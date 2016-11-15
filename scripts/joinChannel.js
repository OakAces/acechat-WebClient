	//joins the channels specified by a string
	//optional msg
  function joinChannel(e, s="")
  {
		var found = false;
		var tmp;
		for(var i =0;i<channels.length;++i)
		{
			if(channels[i].name == e)
			{
				found = true;
				tmp = channels[i];
			}
		}
		if (!!channels && found)
		{
			channel = tmp;
			updateTopBar();
			channel.newMessage = false;
			populateChannelList();
			channel.messages.push(s);
			printChannelMessages(channel);
		}
		else
		{

			var msg = {
									"command" : "JOIN",
									"args" : [e]
								};
			send(msg);
			tmp = new channelObj(e);
			channels.push(tmp);
			channel = tmp;
			channel.messages.push(s);
			chanMsg(channel);
			updateTopBar();
			channel.newMessage = false;
			populateChannelList();
			printChannelMessages(tmp);
		}
  }

