const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo text.'
    },
    {   type: 'input',
        name: 'text color',
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
        name: 'shape color',
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
        // const readmeString = generateMarkdown(answers)
        // console.log(readmeString)
    //     writeToFile(readmeString)
    }
    )}

// Function call to initialize app
init();


