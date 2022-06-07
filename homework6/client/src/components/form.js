import { useState, useEffect } from "react";

const Form = ({ socket, selectedCell, selectTheCell }) => {
  const [feedback, setFeedback] = useState("");
  const [cell, setCell] = useState("");
  const [sent, setSent] = useState(false);

  const submitFeedback = () => {
    if (cell && feedback) {
      socket.emit("new-submit", feedback, cell);
      selectTheCell("");
      setFeedback("");
      setSent(true);
    } else if (!feedback) {
      alert("Feedback is missing o.O");
    }
  };

  useEffect(() => {
    setCell(selectedCell);
  }, [selectedCell]);

  if (sent) return <p>Thanks for your feedback! 🙏🏻</p>;

  return (
    <>
      <div className="feedback-form">
        <input
          value={feedback}
          onChange={(evt) => setFeedback(evt.target.value)}
          placeholder="Enter your feedback"
          type="text"
        />
        <button disabled={!cell} onClick={submitFeedback}>
          Submit
        </button>
      </div>
      <p style={{ opacity: cell ? 0 : 100 }}>
        **To send, you must select a cell in which you want to place the note
      </p>
    </>
  );
};

export default Form;
