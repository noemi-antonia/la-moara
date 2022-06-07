import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/form";
import Board from "./components/board";

function App() {
  const [connectedSocket, setConnectedSocket] = useState();
  const [board, setBoard] = useState([]);
  const [selectedCell, setSelectedCell] = useState("");

  const selectTheCell = (cell) => {
    setSelectedCell(cell);
  };

  useEffect(() => {
    const socket = io();
    socket.on("connected", () => {
      setConnectedSocket(socket);
    });
    socket.on("init-board", (b) => {
      setBoard(b);
    });
    socket.on("new-received-feedback", (b) => {
      setBoard(b);
    });
  }, []);

  if (!connectedSocket) return <p>Waiting for connection</p>;

  return (
    <div className="app">
      <h1>Homework 6</h1>
      <Form
        socket={connectedSocket}
        selectTheCell={selectTheCell}
        selectedCell={selectedCell}
      />
      <Board
        board={board}
        selectTheCell={selectTheCell}
        selectedCell={selectedCell}
      />
    </div>
  );
}

export default App;
