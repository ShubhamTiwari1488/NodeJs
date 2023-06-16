/*
    What Is Middleware? A request handler with access to the application's request-response cycle is known as middleware. 
    It's a function that holds the request object, the response object, and the middleware function. 
    Middleware can also send the response to the server before the request.
*/

const express = require('express');
const path = require('path');

const app = express();

const staticPath = path.join(__dirname,"/public/Simon");
console.log(staticPath);

app.use(express.static(staticPath));

app.get("/",(req,res) => {
    res.send("<h1> This is the Home Page</h1>");
})
app.get('/about',(req,res) => {
   res.send('<h1>This is the about page</h1>');
})

app.get("/help",(req,res) => {
    res.send("<h1>This is the help page</h1>");
})
app.listen(3000);