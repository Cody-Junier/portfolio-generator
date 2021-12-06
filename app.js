const inquirer = require('inquirer');
const fs = require('fs')
const generatePage= require('./src/page-template.js');

const promptUser = ()=>{
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                }else{
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput){
                    return true;
                }else{
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name:'confirmAbout',
            message:'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name:'about',
            message:'Provide some information about yourself:',
            when: ({ confirmAbout})=> {
                if(confirmAbout){
                    return true;
                } else{
                    return false;
                }
            }
        }
    ]);
};

const promptProject = portfolioData => {
    if(!portfolioData.projects){
    portfolioData.projects= [];
    }
    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                }else{
                    console.log('Please enter your Project name!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'description',
            message:'Provide a description of the project (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                }else{
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name:'languages',
            message:'What did you build this project with? (Check all that apply)',
            choices:['JavaScript', 'HTML','CSS','ES6','jQuery','Bootstrap','Node']
        },
        {
            type:'input',
            name:'link',
            message:'Enter the GitHub link to your project (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                }else{
                    console.log('Please enter your GitHub Project Link!');
                    return false;
                }
            }
        },
        {
            type:'confirm',
            name:'feature',
            message:'Would you like to feature this project?',
            default: false
        },
        {
            type:'confirm',
            name:'confirmAddProject',
            message:'Would you like to enter another project?',
            default: false
        }
    ]).then(projectData =>{
        portfolioData.projects.push(projectData);
        if(projectData.confirmAddProject){
            return promptProject(portfolioData);
        } else{
            return portfolioData
        }
    });
};


const mockData = {
    name: 'Lernantino',
    github: 'lernantino',
    confirmAbout: true,
    about:
      'Duis consec.',
    projects: [
      {
        name: 'Run Buddy',
        description:
          'Du',
        languages: ['HTML', 'CSS'],
        link: 'https://github.com/lernantino/run-buddy',
        feature: true,
        confirmAddProject: true
      },
      {
        name: 'Taskinator',
        description:
          'Duis con',
        languages: ['JavaScript', 'HTML', 'CSS'],
        link: 'https://github.com/lernantino/taskinator',
        feature: true,
        confirmAddProject: true
      },
      {
        name: 'Taskmaster Pro',
        description:
          'Duis ',
        languages: ['JavaScript', 'jQuery', 'CSS', 'HTML', 'Bootstrap'],
        link: 'https://github.com/lernantino/taskmaster-pro',
        feature: false,
        confirmAddProject: true
      },
      {
        name: 'Robot Gladiators',
        description:
          'Duis consectetur',
        languages: ['JavaScript'],
        link: 'https://github.com/lernantino/robot-gladiators',
        feature: false,
        confirmAddProject: false
      }
    ]
  };




promptUser()
  .then(promptProject)
  .then(portfolioData => {
    //   const pageHtml = generatePage(portfolioData);
    const pageHtml = generatePage(mockData);

      
      fs.writeFile('./index.html', pageHtml, err => {
          if (err) throw new Error (err);
        
          console.log('Portfolio complete! Check out index.html to see the output!');
        });
    console.log(portfolioData);
  });


