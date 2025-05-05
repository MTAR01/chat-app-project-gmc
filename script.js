const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("chatMessage", (msg) => {
        io.emit("chatMessage", msg); // Broadcast message to all clients
    });
});
