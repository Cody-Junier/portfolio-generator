const fs = require('fs');
const { resolve } = require('path/posix');
const writeFile = fileContent => {
    return new Promise((resolve, reject) =>{
        fs.writeFile('./dist/index.html', fileContent, err=>{
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created.'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject)=> {
    fs.copyFile('./src/style.css', './dist/style.css', err =>{
        if(err){reject(err);return;}
        resolve({
            ok:true,
            message: 'Style Copied'
        });
    });
})
};

module.exports ={
    writeFile, copyFile
};


//       fs.writeFile('./dist/index.html', pageHTML, err => {
//           if (err) throw new Error (err);
        
//           console.log('Portfolio complete! Check out index.html to see the output!');
//           fs.copyFile('./src/style.css', './dist/style.css', err =>{
//               if(err){console.log(err);return;}
//               console.log('Style sheet copied successfully.');
//           });
//         });
//     console.log(portfolioData);
//   });
