const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const Stickynote = require("./models/stickynote"); 

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = 3000;

// ----INIT BOARD----
const DIM = 3;
const BOARD=[DIM];

for (let i = 0; i < DIM; i++) {
  BOARD[i] = Array(DIM).fill("");        
}

// ----ON CONNECTION----
io.on("connection", (socket) => {
  console.log(`socket connected ${socket.id}`);
  socket.emit("connected");

  // to be able to display the empty board with the given dimension
  io.emit("init-board", BOARD);
  
  // when feedback is received
  socket.on("new-submit", ( feedback, cell ) => {
    const [targetCellX, targetCellY] = cell;
    const x = parseInt(targetCellX);
    const y = parseInt(targetCellY);

    // populate with feedback in the chosen coordonates
    for(let row = 0; row < DIM; row++) {
      for(let col = 0; col < DIM; col++){
        if( (row === x) && (col === y) ) {
          BOARD[row][col]= new Stickynote(feedback);
        }
      }
    }
    // update the board to all connected users
    io.emit("new-received-feedback", BOARD);
  });
});

server.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});


