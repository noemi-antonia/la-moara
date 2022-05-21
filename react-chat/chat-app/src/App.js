import './App.css';
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import Chat from "./components/chat"

function App() {
  const [connectedSocket, setConnectedSocket] = useState();

  useEffect(() => {
    const socket = io();

    socket.on("connected", () => {
      setConnectedSocket(socket);
    });

  }, []);

  return (
    <>
      <h1>Homework 4</h1>
      <br></br>
      <Chat socket={connectedSocket}/>
    </>
  );
}

export default App;
