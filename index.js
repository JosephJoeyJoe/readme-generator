const inquirer = require('inquirer')
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');
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
        message: 'List contributors to your project:'            
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
        message: 'List your project features:'            
    },
    {
        type: 'input', 
        name: 'contribute',
        message: 'List instructions on how to contribute here:'            
    },
    {
        type: 'input', 
        name: 'test',
        message: 'List test for your projects:'                        
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Add your GitHub Username:'
    }
];

function writeToFile(fileName, data) {
    
    fs.writeFile('./' + fileName, data, err => {
        if(err) {
            return console.error(err) 
        } else {
            console.log("Successful " + fileName + " created!");
        }

    })   
};

function init() {inquirer.prompt(questions)
    .then(function(info) {
        writeToFile("README.md", markDown(info) )
    })
};

init();