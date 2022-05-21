import { useState, useEffect } from "react";
import Message from "./message";

const ChatBox = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((messages) => {
      return [...messages, message];
    });
  };

  useEffect(() => {
    socket.on("received-message", (message) => {
      addMessage(message);
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
