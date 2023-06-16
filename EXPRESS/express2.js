const express = require('express');
const app = express();

app.get("/",(req,res) => {
    res.status(200).send("Welcome to my Home Page");
});

app.get("/temp",(req,res) => {
    res.send({
        id:1,
        name:"Shubham",
    });
});

app.get("/temp2",(req,res) => {
    res.json({
        id:1,
        name:"Shubham",
    });
});

app.get("/temp3",(req,res) => {
    res.send([{
        id:1,
        name:"Shubham",
    },
    {
        id:2,
        name:"Mohit",
    }
]);
});

app.listen(3000, () => {
    console.log("The Server is listening at 3000");
})