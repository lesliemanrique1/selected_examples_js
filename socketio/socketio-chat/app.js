/* jshint esnext:true */
const express = require('express');
const app = express();


// Server side, socket io setup 
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('public'));

//define what server will do on connection 
io.on('connect', (socket) => {
    // socket represents the connected client
    console.log(socket.id, 'connected');

    // listen -> define what the server will handle (chat message)
    socket.on('chat message', (data) => {
        // broadcast them to all connected clients
        console.log(data);
        // broadcast to everyone
        io.emit('chat message', data); //emit messages
    });

});





server.listen(3000);
