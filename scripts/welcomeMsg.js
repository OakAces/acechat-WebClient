function welcomeMsg()
{
		var welcome = {
										"user" : "AceChat",
										"command" : "SYSTEM",
										"args" : ["Default Channel","Welcome to AceChat! Type /help for a list of commands"],
										"timestamp" : new Date().getTime()/1000
									};
		return welcome;
}
