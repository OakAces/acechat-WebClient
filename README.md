#acechat-WebClient

Web client for the AceChat chat server

![](https://raw.githubusercontent.com/OakAces/acechat-WebClient/master/docs/images/screenshot22.png)
*Screenshot of login dialog. There used to be a separate login page, but
it has since been streamlined into one page*

![](https://raw.githubusercontent.com/OakAces/acechat-WebClient/master/docs/images/screenshot23.png)
*Users are not prompted with the rules for a valid user name unless they enter an invalid name*

![](https://raw.githubusercontent.com/OakAces/acechat-WebClient/master/docs/images/screenshot24.png)
*Screenshot of web UI*

![](https://raw.githubusercontent.com/OakAces/acechat-WebClient/master/docs/images/screenshot25.png)
*Users can access the orginal Dark theme by typing /toggleTheme*

![](https://raw.githubusercontent.com/OakAces/acechat-WebClient/master/docs/images/flowchart.png)
*Flowchart of the program structure.*


#User Commands

Command|Explanation
---|---
/join \<channel\>|Join a channel
/part [channel]|Part a channel
/logoff|Part all channels and quit
/logout|See /logoff
/msg \<usrName\> \<message\>|Send a Private Message
/whoami|Who are you?
/invite \<user0\> [user1]...[usern]|Invite user(s) to the current channel
\<message\>|Send a message
/me \<message\>|Roleplay
/party \<message\>|Throw a party 
/toggleTheme|Toggle between the Light and Dark themes
/user \<userName\>|Set your userName (must be logged out)
/server \<server\>|Set the server address (must be logged out)
/help|Ask for help

#Client-to-Client Protocol
For an explanation of the client-to-client protocol, please see docs/clientToClientProtocol.md
or docs/clientToClientProtocol.pdf
