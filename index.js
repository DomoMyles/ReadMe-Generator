// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Title = ('titlee')

// TODO: Create an array of questions for user input
const Questions = [];

const generateReadme = ({ Title, Description, TableofContents, Install, Usage, Credits, Coop, Test, License, Questions }) =>

    `##${Title}

Description:${Description}
##${TableofContents}
##${Install}
##${Usage}
##${Credits}
##${Coop}
##${Test}
##${License}
##${Questions}`


inquirer.prompt(
    [
        {
            type: "input",
            message: "What is the title of your project?",
            name: "Title"
        }, {
            type: "input",
            message: "Please provide a detailed description about yoour application.",
            name: "Description"
        }, {
            type: "input",
            message: "List your table of contents.",
            name: "TableofContents"
        }, {
            type: "input",
            message: "What is required to install this application, and how do you run  it?",
            name: "Install"
        }, {
            type: "input",
            message: "How is this application used?",
            name: "Usage"
        }, {
            type: "input",
            message: "This product is credited to",
            name: "Credits"
        }, {
            type: "input",
            message: "Who contributed to this project",
            name: "Coop"
        }, {
            type: "input",
            message: "Write tests for your application and provide examples on how to run them",
            name: "Test"
        }, {
            type: "list",
            message: "What Soda??",
            name: "License",
            choices: [
                'Coke',
                'Diet Coke',
                'Cherry Coke',
                'Sprite',
                'Water'
            ]
        }, {
            type: "input",
            message: "Please provide frequent asked questions and answers.",
            name: "Questions"
        },
    ]
)
    // TODO: Create a function to write README file


    .then((answers => {
        const readMeContent = generateReadme(answers)

        fs.writeFile("Title", readMeContent, (err) =>
            err ? console.error(err) : console.log('File Created'))

    }))

    
// function init() { };
// init()

// // TODO: Create a function to initialize app

// // // Function call to initialize app
