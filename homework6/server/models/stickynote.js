class Stickynote {
  constructor(text) {
    this._text = text;
    this._color = this.getRandomColor();
  }

  get text() {
    return this._text;
  }

  get color() {
    return this._color;
  }

  set text(newText) {
    this._text = newText;
  }

  getRandomColor() {
    const red = Math.floor((1 + Math.random()) * 256/2);
    const green = Math.floor((1 + Math.random()) * 256/2);
    const blue = Math.floor((1 + Math.random()) * 256/2);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
  }

}

module.exports = Stickynote;
