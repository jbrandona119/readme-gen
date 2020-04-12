const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const prompt = require('prompt');
prompt.colors = false;

function init() {
  function addBadge(){
    if (`${response.badge}`){
      [![`${projectTitle}`]("https://circleci.com/gh/circleci/circleci-docs.svg?style=svg")]("https://circleci.com/gh/circleci/circleci-docs");
      }
    }
  console.log("Answer the following questions to create a README.md")
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
      message: "Would you like to include a PayPal donation badge?",
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
      message: "List the contributors here:",
      name: "contributor",
    },
    {
      type: "input",
      message: "How would you like people to test?",
      name: "test",
    },
    {
      type: "input",
      message:
        "Explain how you would like to receive questions about your project",
      name: "questions",
    },
  ])
  .then(function (response) {
    console.log(response.username);
    fs.writeFile('README.md',
    `${'# '+ response.projectTitle}\n
    ${response.description}\n
    Table of Contents:
    ${response.tableOfContents}\n
    Installation:
    ${response.installation}\n
    Usage:
    ${response.usage}\n
    License:
    ${response.license}\n
    Contributing members:
    ${response.contributor}\n
    Testing:
    ${response.test}\n
    If you have any questions:
    ${response.questions}\n
    `,
    function(err){
        if(err){
            return console.log(err);
        } console.log("README has been generated");
    },
    )}
  );
 
}

init();