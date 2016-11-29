//prints a message to the screen without putting it in a channel first
//param: string
function printMsg(msg)
{
	var msgHeader="";
	var msgText="";
	var d = new Date(msg.timestamp*1000);
	var ts = "" + ("0"+d.getHours()).slice(-2)+":"+("0"+d.getMinutes()).slice(-2)+":"+("0"+d.getSeconds()).slice(-2);
	msgHeader += ts+"  ";
	msgHeader += "[SYS]";
	msgHeader += msg.user+" > ";
	msgText += msg.args[1];

	msgHeader = "<div class=\"msgHeader\"><code>"+msgHeader+"</code></div>";
	var sp    = "<div class=\"spacer\"></div>";
	msgText = "<div class=\"msgText\"><code>"+msgText+"</code></div>";

	document.getElementById("chat-log").innerHTML="<div class=\"msgRow\">"+msgHeader +sp+ msgText+ "</div>";
	document.getElementById("chat-log").innerHTML+="<div class=\"msgRow\"><div class=\"spacer\"><br></div><div class=\"spacer\"><br></div></div>";


}
