const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your github username?',
      validate: function( answer) {
        if (answer.length < 1) {
            return console.log("Please enter a valid username")
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'repo',
      message: 'What is the name of your repo?',
      default: 'readme-generator' 
    
      
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'If relevant please provide instructions on how to install your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter instructions on how to use your repo.',
    },
    {
      type: 'input',
      name: 'contributers',
      message: 'Please enter any other contributers to this project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please include any tests that were required.',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Please choose a license for your project.',
      },

      function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err) {
                return console.log(err);
            }
            console.log("Your README file is")
        })
      }  
  ]);

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

promptUser()
  .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));

const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
