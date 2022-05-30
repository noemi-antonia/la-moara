class Answer {
  constructor(text, color, occurrence) {
    this._text = text;
    this._color = color;
    this._occurrence = occurrence;
  }

  get text() {
    return this._text;
  }

  get color() {
    return this._color;
  }

  get occurrence() {
    return this._occurrence;
  }

  set text(newText) {
    this._text = newText;
  }

  set color(newColor) {
    this._color = newColor;
  }

  set occurrence(newOccurrence) {
    this._occurrence = newOccurrence;
  }
}

module.exports = Answer;
