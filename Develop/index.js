// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const ListPrompt = require('inquirer/lib/prompts/list');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        validate: nameInput => {
            if (!nameInput) {
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
            'GNU lesser General Public License (LGPL)',
            'Apache License',
            'BSD License',
            'MIT License'
        ],
        validate: licenseChoice => {
            if (!licenseChoice) {
                console.log('Please choose a license for your project!');
                return false;
            } else {
                return true;
            }
        }
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
    }
])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
