#Client-to-Client Protocol

The client-to-client protocol is a secondary and independent protocol from the
main server protocol. The client-to-client protocol is used to communicate
special commands that don't need interference from the server between clients.

Different implementations of the AceChat chat client may choose to implement
this protocol differently, but the input and output should be the same to allow 
for maximum cross-compatibility.

Encoded messages take the form:
```
\protocolxxx<message>\xxx
```
where `xxx` is the three digit hexadecimal protocol number.

##Currently Supported Encodings

###/me
User input in the form
```
/me <message>
```
is encoded as
```
\protocol000<message>\000
```
and is displayed in the channel in the form
```
*<user> <message>*
```

###/party
User input in the form
```
/party <message>
```
is encoded as 
```
\protocol001<message>\001
```
and is displayed in the channel in the form of a party. That is, 
each letter is a random color.

##Unencoded Messages

Unencoded messages are displayed as expected. The protocol only applies to
messages that are wrapped in a protocol layer. Messages wrapped in an invalid or 
unsupported protocol layer should either throw an error or be displayed with
the protocol wrapper, at the client's discretion.
