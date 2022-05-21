import Message from "./message";
import { useState, useEffect } from "react";

const ChatBox = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (msg) => {
    setMessages((messages) => {
      return [...messages, msg.messageObj];
    });
  };

  useEffect(() => {
    socket.on("received-message", (msg) => {
      console.log(socket.id + " " + JSON.stringify(msg.messageObj));
      addMessage(msg);
    });
  }, []);

  return (
    <div className="chat-box">
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
};

export default ChatBox;
