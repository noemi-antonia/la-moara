const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

io.on('connection', (socket) => {
    console.log(`socket connected ${socket.id}`);

    socket.emit("connected");
});

server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
