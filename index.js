// importing files and libraries
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Shape, Square, Triangle, Circle } = require('../Logo-Generator/lib/shapes');

// prompts to intake user input
const questions = [
    {   
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo text.', 
        validate: (text) => text.length > 0 && text.length < 4 || 'Input must be between 1 and 3 characters in length.', 
    },
    {   
        type: 'input',
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

// creates the logo from user input, runs the Shape constructor
function init() { 
    inquirer.prompt(questions)
    .then((answers) => {
        let shapeType;
        console.log(answers)
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
        logo.setText(answers.text, answers.textColor);
        logo.setShape(shapeType);
        
        return writeFile('logo.svg', logo.render(), err => {
            if (err) {
            console.log(err)}
        })
        }) 
    }
// Function call to initialize app
init();

