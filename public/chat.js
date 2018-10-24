// Make connection

let socket = io.connect('http://localhost:4000');

let message = document.getElementById('message');
    handle  = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

message.addEventListener('keypress',function(e){
    let key = e.which || e.keyCode;
    if(key === 13){
     socket.emit('chat',{
         message:message.value,
         handle:handle.value
      })
      message.value = "";
    }else{socket.emit('typing',(handle.value))}
 });

btn.addEventListener('click',function(){
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
     })
     message.value = "";
   
});

socket.on('chat',function(data){
    feedback.innerHTML = "";
    output.innerHTML += `<p><strong>${data.handle}:</strong>${data.message}</p>`
})
socket.on('typing',function(data){
    feedback.innerHTML = `${data} is typing...`
})
