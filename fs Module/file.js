const fs = require('fs');

fs.readFile('../demo.txt','utf8',(err,data) => {
    console.log(err,data);
});

const a = fs.readFileSync('../demo.txt');

console.log(a.toString());

b = fs.writeFileSync('../demo.txt',"This is demo.txt file.");
console.log(b);

fs.writeFile('../demo.txt',"Hello I am Shubham Tiwari",()=>{
    console.log("Written to the file");
})

console.log("Finished");