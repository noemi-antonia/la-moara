import { useState } from "react";

const Form = ({ socket }) => {
  const [answer, setAnswer] = useState("");

  const submitAnswer = () => {
    if(!answer.trim()) alert("You need to give an answer before submit!");
    else{
      socket.emit("new-answer", answer);
    }
  };

  return (
    <>
      <input
        value={answer}
        onChange={(evt) => setAnswer(evt.target.value)}
        placeholder="Enter your answer"
        type="text"
      ></input>
      <button onClick={submitAnswer}>Submit</button>
    </>
  );
};

export default Form;