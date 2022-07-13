const socket= io.connect('http://188.166.133.11:5000/');


const sender= document.getElementById('sender');
const message= document.getElementById('message');
const submitBtn= document.getElementById('submitBtn');
const output= document.getElementById('output');
const feedback= document.getElementById('feedback');


submitBtn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        sender:sender.value
    })
})

socket.on('chat', data => {
    output.innerHTML +='<p><strong>' + data.sender+ '</strong>' + data.message + '</p>';
})

socket.on('temp', data2 => {
    output.innerHTML +='<p>aaaa'+ data2 +'</p>';
})