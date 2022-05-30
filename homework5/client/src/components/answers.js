import { useState, useEffect } from "react";
import Barchart from "./barchart";

const Answers = ({ socket }) => {
  const [arr, setArr] = useState([]);
  const [occurrence, setOccurrence] = useState("");

  useEffect(() => {
    socket.on("new-received-answer", (d) => {
      setArr(d.answers);
      let occurrenceArr = d.answers.map((elem) => elem._occurrence + "fr");
      setOccurrence(occurrenceArr.join(" "));
    });
  }, []);

  return (
    <>
      <Barchart data={arr} occurrence={occurrence} />
    </>
  );
};

export default Answers;
