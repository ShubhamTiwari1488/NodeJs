const fs = require('fs');

//Creating a folder Shubham
fs.mkdirSync('shubham');

//Creating a file read.txt
fs.writeFileSync('read.txt',"Hello I am Shubham Tiwari");

//Renaming the file to write.txt
fs.renameSync('read.txt','write.txt');

//Appending to the file
fs.appendFileSync('write.txt','\nWelcome to my portfolio');

//Reading the file
const data = fs.readFileSync('write.txt');

console.log(data.toString());

//Deleting the file
fs.unlinkSync('write.txt');

//Deleting the folder
fs.rmdirSync('shubham');


