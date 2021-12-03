const inquirer = require('inquirer');
inquirer
    .prompt([{
        type:'input',
        name:'name',
        message:'What is your name?'
    }])
    .then(answers => console.log(answers));
// const fs = require('fs')
// const generatePage= require('./src/page-template.js');

// const pageHtml = generatePage(name, github)


// fs.writeFile('./index.html', pageHtml, err => {
//     if (err) throw new Error (err);
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });

