//prints a welcome message when the user first logs in
function welcomeMsg()
{
		var welcome = {
										"user" : "AceChat",
										"command" : "SYSTEM",
										"args" : [channel,"Welcome to AceChat! Type /help for a list of commands"],
										"timestamp" : new Date().getTime()/1000
									};
		return welcome;
}
