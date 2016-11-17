function disconnect()
{
	channel=null;
	errorHandler("Unable to connect to "+server+"<br>Logging out in 10 seconds...");
	window.setTimeout(logout,10000);
}
