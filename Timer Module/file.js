const fs = require('fs');

//const data = fs.readFileSync('demo.txt');

fs.readFile('demo.txt',(err,data) => {
    if(err) throw err;
    console.log(data);
})

//console.log(data);

console.log("This statement is after console.log(data)");