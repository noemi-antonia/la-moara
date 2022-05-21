import { useState } from "react";

const MessageForm = ({socket}) => {
    const [messages, setMessages] = useState([]);
    const [messageObj, setMessage] = useState({sender:"", message:""});

    const addMessage = (messageObj) => {
        setMessages((messages) => {
            return [...messages, messageObj];
        });
    }

    useEffect(() => {
        socket.on("received-message", (messageObj) => {
          addMessage(messageObj);
        });
      }, []);

    const sendMessage = () => {
        socket.emit ("new-message", {messageObj});
    }

    return (
        <div className="messageForm">
        <input value={messageObj.sender} placeholder="Enter your name" type="text"></input>
        <input value={messageObj.message} className="message-input" placeholder="Enter a message" type="text"></input>
        <button onClick={sendMessage}>Send message!</button>
        </div>
    );
}

export default MessageForm;