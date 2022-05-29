import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/form";
import Answers from "./components/answers";

function App() {
  const [connectedSocket, setConnectedSocket] = useState();

  useEffect(() => {
    const socket = io();
    socket.on("connected", () => {
      setConnectedSocket(socket);
    });
  }, []);

  if (!connectedSocket) return <p>Waiting for connection</p>;
  return (
    <>
    Hello
    <Form socket={connectedSocket}/>
    <Answers socket={connectedSocket}/>
    </>
  );
}

export default App;
