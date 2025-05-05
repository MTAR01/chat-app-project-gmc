const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('frontend')); // Serve frontend files

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chatMessage', (msg) => {
        io.emit('chatMessage', msg); // Broadcast message to all clients
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("chatMessage", (msg) => {
        io.emit("chatMessage", msg); // Broadcast message to all clients
    });
});
