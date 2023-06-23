class Square {
    constructor(text, textColor, color){
    if (text.length > 3) {
        throw new Error('Text must be no more than 3 characters long.');
    }
    this.text = text;
    this.textColor = textColor;
    this.color = color;
}
setColor(color){
    this.color = color;
}
render(){
    return(`<rect x="10" y="10" width="30" height="30"/>" fill="${this.textColor}"/>`)
}};

module.exports = Square;