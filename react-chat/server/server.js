const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = 3000;

io.on("connection", (socket) => {
  console.log(`socket connected ${socket.id}`);

  socket.emit("connected");

  socket.on("new-message", (msg) => {
    io.emit("received-message", msg);
    socket.broadcast.emit("send-notification", msg.sender);
  });
});

server.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
