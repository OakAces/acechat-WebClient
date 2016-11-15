function chanInChanList(s)
	{
		for (var i in chanList)
		{
			if(chanList[i].name == s)
				return i;
		}
		return null;
	}
