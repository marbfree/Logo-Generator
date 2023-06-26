const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Shape, Square, Triangle, Circle } = require('../Logo-Generator/lib/shapes');

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

function init() { 
    inquirer.prompt(questions)
    .then((answers) => {
        switch (answers.shape) {
            case 'Square':
                shapeType = new Square();
                shapeType.setColor(answers.color);
                break;
                
            case 'Triangle':
                shapeType = new Triangle();
                shapeType.setColor(answers.color);
                break;

            case 'Circle':
                shapeType = new Circle();
                shapeType.setColor(answers.color);
                break;
        }
        
        const logo = new Shape() 
        logo.setTextEl(answers.text, answers.textColor);
        logo.setShape(answers.shape);
    
        
        return writeFile('logo.svg', logo.render(), err => {
            if (err) {
            console.log('Error occured when writing to file')}})
        })
    }
// Function call to initialize app
init();

// module.exports = logo
