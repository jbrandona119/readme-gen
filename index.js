const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

function init() {

  inquirer.prompt([
    {
      type: "input",
      message: "What is your Github username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "Please write a brief description of your project",
      name: "description",
    },
    {
      type: "confirm",
      message: "Would you like to include a badge?",
      name: "badge",
      default: true,
    },
    {
      type: "input",
      message: "Please map out your readme in a table of contents",
      name: "tableOfContents",
    },
    {
      type: "input",
      message: "Explain the installation process",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter the usage for your project",
      name: "usage",
    },
    {
      type: "input",
      message: "What is your license?",
      name: "license",
    },
    {
      type: "input",
      message: "How would you like a contributor to help?",
      name: "contributor",
    },
    {
      type: "input",
      message: "How would you like tests updated?",
      name: "username",
    },
    {
      type: "input",
      message:
        "Explain how you would like to receive questions about your project",
      name: "username",
    },
  ])
  .then(function (response) {
    console.log(response.username);
    fs.writeFile('README.txt',
    `${response.projectTitle}\n
    
    
    
    
    
    
    
    `,
    function(err){
        if(err){
            return console.log(err);
        } console.log("README has been generated");
    }
    )}
  )
}
init();