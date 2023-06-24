const inquirer = require('inquirer');
// const fs = require('fs');
const { writeFile } = require('fs/promises');
const { Square, Triangle, Circle } = require('../Logo-Generator/lib/shapes');

class LogoEl{
    constructor(text){
        if (text.length > 3) {
            throw new Error('Text must be no more than 3 characters long.');
        }
        this.text = ''
    }
    render(){
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">`
    }
    setText(){
        this.text = `<text x="10" y="10" "fill=${this.textColor}>${this.text}</text>`
    }
    setShape(shape){
        this.shape = shape;
    }
};



const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo text.'
    },
    {   type: 'input',
        name: 'textColor',
        message: 'Please enter a text color.'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape.',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please enter a shape color.'
    }
]


// function writeToFile(data) {
//     fs.writeFile('logo.svg', data, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });}


function init() { 
    inquirer.prompt(questions)
    .then((answers) => {
        let shape;
        switch (shape) {
            case 'Square':
                shapeType = new Square();
                shapeType.setColor(color);
                break;
                
            case 'Square':
                shapeType = new Triangle();
                shapeType.setColor(color);
                break;

            case 'Square':
                shapeType = new Circle();
                shapeType.setColor(color);
                break;
        }

         const logoEl = new LogoEl(answers);
         logoEl.setText(answers.text, answers.textColor);
         logoEl.setShape(answers.shape)
        // console.log(applyLogo)
          return writeFile('logo.svg', logoEl.render());

    }

    )}

// Function call to initialize app
init();


