let express = require('express');
let socket = require('socket.io');

// App Setup
let app = express();

// Server Setup
let server = app.listen(4000, ()=>{
    console.log("Listening to port 4000");
});

//Define where the Static files are
app.use(express.static("public"));


//Socket Setup 

let io = socket(server);

io.on('connection',(socket)=>{
    console.log("Socket is working", socket.id);

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data)
    })

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data)
    })

})

