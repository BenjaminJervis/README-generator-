// function to generate markdown for README
function generateMarkdown(data) { 
  return `# ${data.title}

  # ${data.title} 
  
  ## Table of Contents
  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)
  
  [License](#license)

  [Contribute](#contribute)
  
  [Tests](#tests)
  
  [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## technology 
  ${data.technology}
  
  ## Installation
  These steps should be followed to install this project: 
  ${data.installation}

  ## Usage
  This project should be used to 
  ${data.usage}

  ## License
  This project holds a ${data.license} license.

  ## Contributing
  The following contributed to this project: 
  ${data.contributing}

  ## Tests
  ${data.testing}
 
  ## questions
  Please contact me via email if you have any further questions.
  [Contact Me](mailto:${data.email})
   
  ## You can also visit my GitHub page if you would like to see other examples of my work.
  
  [GitHub page](https://github.com/${data.github}/ "Visit my GitHub page")  
 
  
 
`;
}


module.exports = generateMarkdown;
