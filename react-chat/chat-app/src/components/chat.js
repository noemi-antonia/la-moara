import { io } from "socket.io-client";
import ChatBox from "./chatbox";
import MessageForm from "./messageform";
import Notification from "./notification";
import { useEffect, useState } from "react";

const Chat = () => {
  const [connectedSocket, setConnectedSocket] = useState(null);

  useEffect(() => {
    const socket = io();
    socket.on("connected", (sda) => {
      setConnectedSocket(socket);
      console.log(socket);
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
