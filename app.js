var http = require('http'),
	fs = require('fs'),
	io = require('socket.io');

var server = http.createServer(function(req, res){
	fs.readFile("client.html", 'utf8', function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'})
		res.end(data)
	})
}).listen(3000);

var usercount = 0;

io = io.listen(server);
io.sockets.on('connection', function(socket){
	//fire new user online
	usercount++;
	io.sockets.emit('new_user', {user: usercount})
	socket.on('message_to_server', function(data){
		io.sockets.emit('message_to_client',{message: data['message']})
		// console.log(data);
	})
	socket.on('disconnect', function(){
		usercount--;
	})
})

console.log('listening on port 3000');