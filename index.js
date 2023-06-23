const inquirer = require('inquirer');
const fs = require('fs');
const generateShape = require('./utils/generateLogo')
// const { Square, Triangle, Circle } = require('./lib/shapes');

// class Svg{
//     constructor(){
//         this.text = ''
//         this.color = ''
//     }
//     render(){
//         return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">`
//     }
//     setText(text){
//         this.text = `<text x="10" y="10">${text}</text>`
//     }
//     setTextColor()
// }


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
        const applyLogo = generateShape(answers)
        console.log(applyLogo)
        writeToFile(applyLogo)
    }
    )}

// Function call to initialize app
init();


