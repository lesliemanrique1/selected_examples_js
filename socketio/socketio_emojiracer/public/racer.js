
 document.addEventListener('DOMContentLoaded',init);
 function init(){
 	// there's more than one button...
 	const buttons = document.querySelectorAll('button'); 
 	let socket = io(); 


 	//listens for update 
 	//changes the position of emoji based on data from the server 
 	socket.on('update',function(data){
 		console.log("print data\t",data);
 		for(const player in data){
 			console.log(player); 
 			if(data.hasOwnProperty(player)) {
                document.querySelector(`.${player}`).style.left = `${data[player]}px`;
            }

 		}
 	});

 	//updates the data from the server through event listener 
 	Array.prototype.forEach.call(buttons, (btn) => {
        btn.addEventListener('click', move.bind(btn, socket));
    });

    //emits update data to the server 

    function move(socket) {
    	socket.emit('update', this.className.replace('Btn', '')); //send message to server - playernum 
	}

}
 	
 	
