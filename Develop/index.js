// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const ListPrompt = require('inquirer/lib/prompts/list');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        validate: projectNameInput => {
            if (!projectNameInput) {
                console.log('please enter the name of your project!');
                return false;
            } else {
              return true;
            }
       
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Provide a short description explaining the what, why, and how of your project:',
        validate: descInput => {
            if (!descInput) {
                console.log('Please enter a description for your project!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: instSteps => {
            if (!instSteps) {
                console.log('please provide steps for installation!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use:',
        validate: usageInfo => {
            if (!usageInfo) {
                console.log('Please provide usage information!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license type for your project:',
        choices: [
            'GNU General Public License (GPL)',
            'Apache License',
            'BSD License',
            'MIT License'
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide instructions for other to contribute to this project:',
        validate: contrInfo => {
            if (!contrInfo) {
                console.log('You must enter steps for others to contribute to this project');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide information on how to run the tests for you application:'
    },
    {
        type: 'name',
        name: 'name',
        message: 'Enter your name:',
        validate: nameInput => {
            if (!nameInput) {
                console.log('Please enter your name!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
       type: 'input',
       name: 'githubUserName',
       message: 'Enter your GitHub username:',
       validate: github => {
           if (!github) {
               console.log('Please enter your github username!');
               return false;
           } else {
               return true;
           }
       }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: emailInput => {
            if (!emailInput) {
                console.log('Please enter your email address!');
                return false;
            } else {
                return true;
            }
        }
    }
]);
};

questions().then(userData => {
    return writeToFile(userData)
});

// TODO: Create a function to write README file
function writeToFile() {
    fs.writeFile('./Develop/utils/README.md', generateMarkdown(userData));
        
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
// init();
// writeToFile(userData);
