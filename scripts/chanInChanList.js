//given a string s, the index of a channelObj with the same name atrribute from chanList
//or null if it is not found
function chanInChanList(s)
	{
		for (var i in chanList)
		{
			if(chanList[i].name == s)
				return i;
		}
		return null;
	}
