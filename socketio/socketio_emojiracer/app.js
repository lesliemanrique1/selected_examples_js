// Server side code 

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static('public'));
// server code goes here!
const players = {player1: 100, player2: 0};
const delta = 5;

//uppon connection, the server emits the players data to all clients 
io.on('connect',(socket)=>{
	console.log(socket.id,"connected!");
	//emits the players to everyone 
	socket.emit("update",players); 


	//changes the position by 5 
	//socket handles update 
	socket.on('update',(k) => {
		console.log(k);
		players[k]+=delta;
		io.emit('update',players); //broadcasts to everyone the players data 
	});
});




server.listen(3000);