import { useState } from "react";

const Form = ({ socket }) => {
  const [answer, setAnswer] = useState("");
  const [sent, setSent] = useState(false);

  const submitAnswer = () => {
    if (!answer.trim()) alert("You need to give an answer before submit!");
    else {
      socket.emit("new-answer", answer);
      setSent(true);
    }
  };

  if (sent) return <p>Thanks for your answer! 🙏🏻</p>;

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
