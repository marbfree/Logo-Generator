class Triangle {
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
    return(`<polygon points="150, 18 244, 182 56, 182" fill="${this.textColor}"/>`)
}};

module.exports = Triangle;
