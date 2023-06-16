// Express.js is a Node.js framework. It's is the most popular framework as of now .

// Express.js is web application framework that provides you with a simple API to build websites, web apps and back ends.

const express = require('express');
const fs = require('fs');
const app = express();

//Creating routing 
app.get("/",(req,res) => {
    res.write("Hello from the express");

    res.write("Hello from the express");

    res.send();
});

app.get("/about",()=>{
    res.send("Hello world from the about page");
});

app.get("/stream",(req,res) => {
    readStream = fs.createReadStream('input.txt');

    readStream.pipe(res);
})

app.listen(3000,()=>{
    console.log("I am listening");
})