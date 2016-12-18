/* jshint esnext:true */
// create a socket object using global io object

const socket = io(); // could take a url, but default to same origin

const sendBtn = document.querySelector('#sendBtn');
sendBtn.addEventListener('click', handleSend);

//grabs the value of the input (sendBtn) and emits it to the server
function handleSend(evt) {
    const message = document.querySelector('#message').value;
    socket.emit('chat message', message);

}

//this function listens for a chat message on the server and adds
//it to the DOM 
socket.on('chat message', (data) => {
    document.body.appendChild(
            document.createElement('div'))
            .textContent = data;

});
