import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import ChatBox from "./chatbox";
import MessageForm from "./messageform";
import Notification from "./notification";

const Chat = () => {
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
      <div className="chat">
        <ChatBox socket={connectedSocket} />
        <MessageForm socket={connectedSocket} />
      </div>
      <Notification socket={connectedSocket} />
    </>
  );
};

export default Chat;
