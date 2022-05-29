const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = 3000;

const ANSWERS = [];

const addAnswer = (answer) => {
  let answerObj = {};
  answerObj.text = answer;
  answerObj.occurrence = getOccurrence(answer);

  if(answerObj.occurrence > 0){
    for (var i = 0; i < ARRAYS.length; i++)
    if (ARRAYS[i].text === value){
      answerObj.color = ARRAYS[i].color;
      break;
    }
  }
  else{
    answerObj.color = setColor(answer);
    answerObj.color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
  }

  
  ANSWERS.push(answerObj);
}

const getOccurrence = (value) => {
  return ANSWERS.filter((v) => (v.text === value)).length;
}

const setColor = (answer) => {
  
}

io.on("connection", (socket) => {
  console.log(`socket connected ${socket.id}`);

  socket.emit("connected");

  socket.on("new-answer", (answer) => {
    console.log(`receiver answer: ${answer}`);

    // addAnswer(answer);

    io.emit("received-answer", answer);
  });
});

server.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});


