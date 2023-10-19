// TODO: Include packages needed for this application
//import file here = require('path to file')
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['MIT', 'Apache2.0', 'Eclipse Public License 1.0', 'None'],
        
    },

    {
        type: 'input',
        name: 'description',
        message: "Provide a short description for your project."
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps needed to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can your project be used?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How can other users make contributions to your project',

    },
    {
        type: 'input',
        name: 'test',
        message: 'If possible, how can you test this project?',
    },
    {
        type: 'input',
        name: 'futureQuestions',
        message: 'What is your Github username so that others can reach you with future questions?'
    },
    {
        input: 'input',
        name: 'email',
        message: 'What is your email so that others can reach you with questions?'
    }
];

// TODO: Create a function to write README file
const writeToFile = fileContent => {
        fs.writeFileSync('./generateREADME.md', fileContent), (err) => err ? console.log(err) : console.log('successfully generated README.md!!');
    }
  




    //  Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
            var fileContent = generateMarkdown(answer);
            writeToFile(fileContent)
        });
}


// Function call to initialize app
init();

//export questions
module.exports = questions;