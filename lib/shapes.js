class Shape {
    constructor(text){
        this.text = text;
    // if (text.length > 3) {
    //     throw new Error('Text must be no more than 3 characters long.');
    // };
}
render(){
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
}
setTextEl(text, textColor){
    this.textEl = ''
    this.textEl = `<text x="10" y="10" fill="${textColor}">${text}</text>`
}
setColor(color) {
    this.color = ''
    this.color = color;
}
setShape(shape) {
    this.shape = ''
    this.shape = shape;
}
};
class Square extends Shape {   
    render() {
        return `<rect x="10" y="10" width="30" height="30"/>" fill="${this.color}"/>`
    }
};
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
};
class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20"/>" fill="${this.color}"/>`
    }
};

module.exports = { Shape, Square, Triangle, Circle }