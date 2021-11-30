let socket = io.connect('http://localhost:4000');

let message = document.getElementById('message'),
handle = document.getElementById('handle'),
btn = document.getElementById('send'),
output = document.getElementById('output'),
feedback = document.getElementById('feedback');


btn.addEventListener('click', ()=>{

    socket.emit('chat', {
        message:message.value,
        handle:handle.value
    })

})

//This is for the typing message, it's optional
message.addEventListener('keypress',()=>{
    socket.emit('typing', handle.value)
})


//This is passing the value form the input into the HTML
socket.on('chat',(data)=>{
    feedback.innerHTML= "";
    output.innerHTML += "<p><strong>"+ data.handle +": </strong>"+ data.message+"</p>"
})

//This is optional, passing the value when someone is typing
socket.on('typing',(data)=>{
    feedback.innerHTML = "<p><em>"+data+ " is typing... </em></p>"
})
