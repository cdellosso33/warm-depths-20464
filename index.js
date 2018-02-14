var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/* register static file directory for
	 import of css and js files */
app.use(express.static('public'));

// set http listener on port 3000
http.listen(3000, function() {
	console.log('listening on *:3000');
})

//socket connection
io.on('connection', function(socket) {
	socket.on('chat message', function(msg) {
		io.emit('chat message', msg);
	});
	console.log('a user has connected!');
});

// our first route
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/chatworld.html');
});