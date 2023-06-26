// const logo = require('../index')

class Shape {
    constructor(text){
        
    // if (text.length > 3) {
    //     throw new Error('Text must be no more than 3 characters long.');
    // };
}
render(){
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
}
setText(text, textColor){
    this.text = `<text x="100" y="100" font-size="3em" text-anchor="middle" fill="${textColor}">${text}</text>`
}
setShape(shape) {
    console.log(shape)
    this.shape = shape.render();
}
setColor(color) {
    console.log(color)
    this.color = color;
}
};
class Square extends Shape {  
    render() {
        return `<rect x="10" y="10" width="300" height="300"/>" fill="${this.color}"/>`
    }
};
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 0 270, 182 0, 182" fill="${this.color}"/>`
    }
};
class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="100"/>" fill="${this.color}"/>`
    }
};

module.exports = { Shape, Square, Triangle, Circle }