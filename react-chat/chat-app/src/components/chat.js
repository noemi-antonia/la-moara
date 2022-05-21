import ChatBox from "./chatbox";
import MessageForm from "./messageform"

const Chat = (props) => {
    return (
        <div className="chat">
            <ChatBox socket={props.socket}/>
            <MessageForm socket={props.socket}/>
        </div>
    );
}

export default Chat;