function toggleTheme()
{
	if(theme == "dark")
	{
		theme = "light";
		document.getElementById("theme").href="light.css";
	}
	else if(theme == "light")
	{
		theme = "dark";
		document.getElementById("theme").href="dark.css";
	}
	else
		errorHandler("ERROR: Invalid theme");
}
