class Circle {
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
    return(`<circle cx="25" cy="75" r="20"/>" fill="${this.textColor}"/>`)
}};

module.exports = Circle;