const Message = (props) => {
  return (
    <>
      <div>
        {props.sender}: {props.message}
      </div>
    </>
  );
};

export default Message;
