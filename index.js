const inquirer = require('inquirer');
// const fs = require('fs');
const { writeFile } = require('fs/promises');
const { Square, Triangle, Circle } = require('../Logo-Generator/lib/shapes');

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
        let shape;
        switch (shape) {
            case 'Square':
                shapeType = new Square();
                shapeType.setColor(color);
                break;
                
            case 'Triangle':
                shapeType = new Triangle();
                shapeType.setColor(color);
                break;

            case 'Circle':
                shapeType = new Circle();
                shapeType.setColor(color);
                break;
        }

         return writeFile('logo.svg', answers.shapeType)
    }
    )}

// Function call to initialize app
init();


