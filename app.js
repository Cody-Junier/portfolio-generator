const fs = require('fs')
const generatePage= require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2, process.argv.length);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// console.log(profileDataArgs)
const [name, github] = profileDataArgs;
// const printProfileData = profileDataArr =>{
//     for (let i=0; i < profileDataArr.length; i++){
//     console.log(profileDataArr[i]);
//     }
//     console.log('==========');
//     profileDataArr.forEach(profileItem =>
//         console.log(profileItem));
// };

// printProfileData(profileDataArgs);


fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error (err);
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });
