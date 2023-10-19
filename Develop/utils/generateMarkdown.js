//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js')

// function that returns a license badge based on which license is passed in. If there is no license badge return empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if (license === 'Apache 2.0') {
    badge = '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }else if (license === 'Eclipse Public License 1.0'){
    badge = '![License: Esclipse Public License 1.0]`(https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  }else{
    badge = ''
  }
  return badge;
}

//function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
    if(license === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
    }else if (license === 'Apache 2.0') {
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0.txt'
    }else if (licesnse === 'Eclipse Public License 1.0') {
      licenseLink = 'http://www.eclipse.org/org/documents/epl-v10.php'
    }else {
      licenseLink = ''
    }
    return licenseLink;
   
}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None'){
    licenseSection = ''
  }else {
    licenseSection = `license: ${license}`
  }
  return licenseSection;
}

// Create a function to generate markdown for README
//Create renderLicenseSection,badge, and link to get answers.
function generateMarkdown(answer) {
  return`
  # ${answer.title}
 
  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}

  ## Table of Contents:
  ### *[License](#license)
  ### *[installation](#installation)
  ### *[Usage](#usage)
  ### *[Contributors](#contributors)
  ### *[Tests](#tests)
  ### *[Questions](#questions)

  ## Installation:
  ### In order for the app to function you must install:
  ### ${answer.installation}

  ## Usage:
  ### How can your project be used?
  ### ${answer.usage}

  ## Contributors:
  ### ${answer.contributions}

  ## Tests: 
  ### To run this app, run the following commands in your terminal:
  ### ${answer.test}

  ##Questions:
  ### If you have any questions about the app, you can contact me at either
  ### Github: https://github.com/${answer.futureQuestions}
  ###or
  ### Email: ${answer.email}

`;
}
//exports
module.exports = generateMarkdown;
