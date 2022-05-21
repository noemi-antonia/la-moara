import { useState } from "react";

const MessageForm = ({ socket }) => {
  const [messageObj, setMessage] = useState({ sender: "", message: "" });

  const sendMessage = () => {
    socket.emit("new-message", { messageObj });
    setMessage((messageObj) => {
      const updatedMessageObj = { ...messageObj };
      updatedMessageObj.message = "";
      return updatedMessageObj;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...messageObj,
      [name]: value,
    });
  };

  return (
    <div className="messageForm">
      <input
        value={messageObj.sender}
        onChange={handleInputChange}
        name="sender"
        placeholder="Enter your name"
        type="text"
      ></input>
      <input
        value={messageObj.message}
        onChange={handleInputChange}
        name="message"
        className="message-input"
        placeholder="Enter a message"
        type="text"
      ></input>
      <button onClick={sendMessage}>Send message!</button>
    </div>
  );
};

export default MessageForm;
