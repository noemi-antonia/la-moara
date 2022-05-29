import { useState, useEffect } from "react";

const Answers = ({ socket }) => {
    const [answers, setAnswers] = useState([]);
    const addAnswer = (a) => {
        setAnswers((answers) => {
          return [...answers,a];
        });
    };

    const buildTheAnswerObject = (a) => {
        let answerObj = {};
        // answerObj.color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        answerObj.text = a;
        answerObj.occurrence = getOccurrence(a);
        return answerObj; 
    }

    const calcPercentage = (value) => {
        return (100/answers.length) * getOccurrence(value);
    }

    const getOccurrence = (value) =>{
        const a = answers.splice();
        var count = 0;
        a.forEach((v) => (v === value && count++));
        console.log(`answers.length = ${a.length}`);
        return count;
    }

    useEffect(() => {
        console.log(`useEffect answers = ${answers}`);
        socket.on("received-answer", (aaa) => {
            console.log(`received-answer answers = ${answers}`);
            addAnswer(buildTheAnswerObject(aaa));
        });
      },[]);

    console.log(answers);
    const domAnswers = answers.map((item,index) => <div key={index} style={{backgroundColor: item.color}}> {item.text} </div>);
    
    return(
    <>
    <div className="barchart">
        {domAnswers}
    </div>
    </>
    );
}

export default Answers;