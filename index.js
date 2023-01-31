const fs = require("fs"); //starter code provided 
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

const createFileAsync = util.promisify(fs.writeFile); //used to write to a file 

// array of questions for user
const questions = [
    {
      type: "input",
      name: "title",
      message: "What would you like to call the project?",
    },
{
    type: "input",
    name: "description",
    message:
      "How would you describe your project?",
  },

  {
    type: "input",
    name: "installation",
    message: "Which steps should be taken to install your project?",
  },

  {
    type: "input",
    name: "description",
    message:
      "How would you describe your project?",
  },

  {
    type: "input",
    name: "description",
    message:
      "How would you describe your project?",
  },
  {
    type: "input",
    name: "technology",
    message:
      "What technology did you use to make your project?",
  },

  

  { //list of choices for the user to choose the license 
    type: "list",
    name: "license",
    message: "What type of license do you have?  Use arrow keys",
    choices: ['MIT', 
    'APACHE 2.0', 
    'GPL 3.0', 
    'BSD 3', 
    'None'
],
 },
 
  {
    type: "input",
    name: "usage",
    message: "How should your project be used?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Who contributed to this project what third party assets did you use?",
  },
  {
    type: "input",
    name: "testing",
    message: "How should this project be tested?",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
  },

  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  }
];

//Arrow function used to start the program 
//const init = () => inquirer.prompt([...questions]);

//init()
//.then function used to generate the read me.md file 
//.then((data) => {
    //const README = generateMarkdown(data);
   // return createFileAsync("README.md", README);
 // })
 // .catch((err) => console.error(err));
