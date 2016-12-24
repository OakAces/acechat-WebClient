#acechat-WebClient

Web client for the AceChat chat server
Originally created for CSE 280 at Oakland University

![](https://raw.githubusercontent.com/nathalie-tate/acechat-WebClient/master/docs/images/screenshot22.png)
*Screenshot of login dialog. There used to be a separate login page, but
it has since been streamlined into one page*

![](https://raw.githubusercontent.com/nathalie-tate/acechat-WebClient/master/docs/images/screenshot23.png)
*Users are not prompted with the rules for a valid user name unless they enter an invalid name*

![](https://raw.githubusercontent.com/nathalie-tate/acechat-WebClient/master/docs/images/screenshot24.png)
*Screenshot of web UI*

![](https://raw.githubusercontent.com/nathalie-tate/acechat-WebClient/master/docs/images/screenshot25.png)
*Users can access the orginal Dark theme by typing /toggleTheme*

![](https://raw.githubusercontent.com/nathalie-tate/acechat-WebClient/master/docs/images/flowchart.png)
*Flowchart of the program structure.*


#User Commands

Command|Explanation
---|---
/join \<channel\>|Join a channel
/part [channel]|Part a channel
/logoff|Part all channels and quit
/logout|See /logoff
/msg \<userName\> \<message\>|Send a Private Message
/whoami|Who are you?
/invite \<user0\> [user1]...[usern]|Invite user(s) to the current channel
\<message\>|Send a message
/me \<message\>|Roleplay
/party \<message\>|Throw a party 
/toggleTheme|Toggle between the Light and Dark themes
/user \<userName\>|Set your userName (must be logged out)
/server \<server\>|Set the server address (must be logged out)
/help|Ask for help
Mandatory arguments to commands are denoted by angle brackets < >

Optional arguments to commands are denoted by square brackets [ ]

/user and /server are only available before you log in. /toggleTheme is always available.

All other commands are only available to logged in users.


#Client-to-Client Protocol
For an explanation of the client-to-client protocol, please see
docs/clientToClientProtocol.md [[x]](https://github.com/nathalie-tate/acechat-WebClient/blob/master/docs/clientToClientProtocol.md) 

#Accessing the Client
The client is currently available at https://acechat.dyladan.me and http://nathalietate.xyz/projects/acechat
