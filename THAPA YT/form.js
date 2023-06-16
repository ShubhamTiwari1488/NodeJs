const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

app.use(bodyParser.urlencoded({extended: false}));

app.get("/",(req,res) => {
    res.sendFile(__dirname+"/form.html");
})

app.post("/",(req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log("Username: " + username);
    console.log("Password: "+ password);  
})

app.listen(3000);