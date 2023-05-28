const fs = require('fs');
const data = {
    name:"Shubham",
    age:22,
    student:true
};

console.log(data)

//Converting the above object into JSON(Javascript Object Notation)
jsonData = JSON.stringify(data);

console.log(jsonData);

//Converting the above JSON back to an object

originalData = JSON.parse(jsonData);

console.log(originalData)



// 2. Storing the json file into a new file
fs.writeFile('new_jsonData.json',jsonData,()=>{
    console.log("New JSON file is created");
})

// 3. Reading the JSON file created

// fs.readFile('new_jsonData.json',(err,data)=>{
//     console.log(data.toString());
// })

fs.readFile('new_jsonData.json',"utf-8",(err,data)=>{
    console.log(data);
})

// 4. Converting it back to original object

var Data = JSON.parse(jsonData);

console.log(Data);