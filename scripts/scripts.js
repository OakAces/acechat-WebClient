	var server = getCookie("server");
	var focus = true;
	
	if(server == "")
	{
		window.location="login.html";
	}

	var sock = new WebSocket("wss://"+server);

	var userName;

  //current channel
  var channel;

	//store lists retrieved from server
	var usrList = [];
	var chanUsrList = [];

  //channels currently "joined"
  var channels = [];

	//all channels on server
	var chanList = [];
	
	function getCookie(cname) 
	{
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length,c.length);
			}
		}
		return "";
	} 

	//updates top bar and online-channel-list header
	function updateTopBar()
	{
		document.getElementById("channel-title").innerHTML = channel.name;
		document.getElementById("online-channel-header").innerHTML = channel.name;
	}

  function createCookie(name,value,days) 
	{
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toUTCString();
    }
    else 
    {
      var expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
  }
