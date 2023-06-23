const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./utils/generateLogo')

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


function writeToFile(data) {
    fs.writeFile('logo.svg', data, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });}


function init() { 
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        const applyLogo = generateLogo(answers)
        console.log(applyLogo)
        writeToFile(applyLogo)
    }
    )}

// Function call to initialize app
init();


