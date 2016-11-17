//updates top bar and online-channel-list header
	function updateTopBar()
	{
		document.getElementById("channel-title").innerHTML = channel.name;
		document.getElementById("online-channel-header").innerHTML = channel.name;
	}
