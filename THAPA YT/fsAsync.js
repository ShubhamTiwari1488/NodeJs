/* In Asynchronous modules , we need to pass a callback function */

const fs = require('fs');

//Creating the folder
fs.mkdir('shubham',(err)=>{
    console.log("The folder is created");
    console.log(`The error is ${err}`);
})

//Creating a file write.txt
fs.writeFile('write.txt',"Hello I am Shubham Tiwari",(err,data)=>{
    console.log("File Finished");
    console.log(`The data is ${data}`); //data will be undefined
    console.log(`The error is ${err}`); //err will be null
});

//Renaming the file to read.txt
fs.rename('write.txt','read.txt',(err)=>{
    console.log("The file is renamed");
    console.log(`The error is ${err}`);
})

//Reading the file asynchronously
fs.readFile('read.txt',(err,data) => {
    console.log(`The Content of the file is ${data}`);
    console.log(`The error is ${err}`);
})

//Deleting the file asynchronously
fs.unlink('read.txt',()=>{
    console.log("The file is deleted");
})

//Deleting the folder asynchronously
fs.rmdir('shubham',()=>{
    console.log("The folder is deleted");
})