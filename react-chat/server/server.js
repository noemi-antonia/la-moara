const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

io.on("connection", (socket) => {
  console.log(`socket connected ${socket.id}`);

  socket.emit("connected");

  socket.on("new-message", (data) => {
    console.log("new-message" + JSON.stringify(data));
    io.emit("received-message", data);
    socket.broadcast.emit("send-notification", data.messageObj.sender);
  });
});

server.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
