//calls disconnect when the WebSocket closes
sock.onclose = function()
{
	disconnect();
}
