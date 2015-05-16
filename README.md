# basic-node-chat

Learning the using of socket.io using realtime cha application. Basicly there are two main method in this case :
- Client which is always listen to broadcast.
- Server (app.js) which is emitting broadcast.
When events are fired, app.js emitting signal to all clients. Clients listen to those signal, they respond it. As simple as that

This is very basic chat. Not including sanitizing input, user management, etc. Feel free to fork this project.
