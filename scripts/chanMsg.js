//given a channelObj, send a welcome message to that channel
function chanMsg(e)
{
		var welcome = {
										"user" : "AceChat",
										"command" : "SYSTEM",
										"args" : [e.name,"Welcome to "+ e.name],
										"timestamp" : new Date().getTime()/1000
									};
		e.messages.push(welcome);
}
