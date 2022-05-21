const Message = (props) => {
  return (
      <div className="message">
        {props.sender} <div className="text">{props.message}</div>
      </div>
  );
};

export default Message;
