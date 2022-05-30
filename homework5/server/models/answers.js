const Answer = require("./answer");

class Answers {
  constructor() {
    this.answers = [];
  }

  newAnswer(answer) {
    if (this.answerAlreadyExist(answer)) {
      for (var i = 0; i < this.allAnswers; i++)
        if (this.answers[i].text.toLowerCase() === answer.toLowerCase()) {
          this.answers[i].occurrence++;
          break;
        }
    } else {
      let newColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase();
      let answerObj = new Answer(answer, newColor, 1);
      console.log(`answerobj=${answerObj}`);
      this.answers.push(answerObj);
    }
  }

  answerAlreadyExist(value) {
    return this.answers.some(
      (element) => element.text.toLowerCase() === value.toLowerCase()
    );
  }

  get allAnswers() {
    return this.answers.length;
  }
}

module.exports = Answers;
