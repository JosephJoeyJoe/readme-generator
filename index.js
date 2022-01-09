const inquirer = require('inquirer')
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Please describe the what, why, and how of your project.'
    },
    {
        type: 'input', 
        name: 'installation',
        message: 'How does one install and run your project?'   
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'How does one use your project?'
    },
    {
        type: 'input', 
        name: 'credits',
        message: 'List contributors to your project.'            
    },
    {
        type: 'checkbox', 
        name: 'license',
        choices: ["MIT", "GPLv3", "IBM", "Apache"],
        message: 'Check for any license used.'            
    },
    {
        type: 'input', 
        name: 'features',
        message: 'List your project features here.'            
    },
    {
        type: 'input', 
        name: 'contribute',
        message: 'List instructions on how to contribute here.'            
    },
    {
        type: 'input', 
        name: 'test',
        message: 'List test for your projects here.'                        
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();