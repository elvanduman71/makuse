const express = require('express');

const socket = require ('socket.io');

const app=express();



app.use(express.static('public'));

const server=app.listen(5000);
const io = require('./socket').init(server);

io.on('connection', socket => {
    console.log(socket.id);
    socket.on('chat' , data => {
        io.sockets.emit('temp', data);
    })

})
