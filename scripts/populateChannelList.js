//populates the channel list on the left with buttons
function populateChannelList()
	{
		document.getElementById("channel-list").innerHTML="";
		for(var i=0;i<chanList.length;++i)
		{
			if(chanList[i].name == channel.name)
			{
				var btn = '<button class="channel-button"id="active-channel" onclick="joinChannel(\''+chanList[i].name+'\');document.getElementById(\'chat-prompt\').focus();"><code>*'+chanList[i].name+'</code></button>';
			
			}
			else
			{
				if(channels.indexOf(channels[getChannel(chanList[i].name)]) > -1)
				{
					if (channels[getChannel(chanList[i].name)]!= null && channels[getChannel(chanList[i].name)].newMessage)
					{
						var btn = '<button class="channel-button" onclick="joinChannel(\''+chanList[i].name+'\');document.getElementById(\'chat-prompt\').focus();"><code>*'+chanList[i].name+'!</code></button>';
					}
					else
					{
						var btn = '<button class="channel-button" onclick="joinChannel(\''+chanList[i].name+'\');document.getElementById(\'chat-prompt\').focus();"><code>*'+chanList[i].name+'</code></button>';
					}
				}
				else
					var btn = '<button class="channel-button" onclick="joinChannel(\''+chanList[i].name+'\');document.getElementById(\'chat-prompt\').focus();"><code>'+chanList[i].name+'</code></button>';
			}
			document.getElementById("channel-list").innerHTML+=btn+"<br>";
		}
	}
