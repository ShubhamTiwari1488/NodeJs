const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req,res)=>{
    //Reading the API file
    const jsonData = fs.readFileSync("api.json");
    const data = JSON.parse(jsonData);  //Converting the json into object
    
    //Logging the data
    console.log(data);

    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader("content-type","text/html");
        res.end("<h1>Welcome Everyone!!</h1>");
    }

    else if(req.url == '/api'){
        res.writeHead(200,{"content-type":"application/json"});
        const sendData = data.email;
        res.end(`<h1>The Email of the user is : ${data.email}</h1>`);
    }
});

server.listen(port,hostname,()=>{
    console.log(`Listening at http://${hostname}:${port}`);
})