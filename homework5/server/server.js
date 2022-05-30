const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const Answers = require("./models/answers");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = 3000;

const ANSWERS = new Answers();

io.on("connection", (socket) => {
  console.log(`socket connected ${socket.id}`);

  socket.emit("connected");

  socket.on("new-answer", (answer) => {
    console.log(`receiver answer: ${answer}`);

    ANSWERS.newAnswer(answer);

    io.emit("new-received-answer", ANSWERS);
  });
});

server.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});


