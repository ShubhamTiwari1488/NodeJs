const http = require('http');
const { type } = require('os');
const fs = require('fs');
const port = process.env.port || 3000;
const path = require('path');
const hostname = '127.0.0.1';

//Fetching the html code
const html = fs.readFileSync('index.html'); 
//Creating the server
const server = http.createServer((req,res) =>{
    res.setHeader('content-type','text/html');
    console.log(req.url);

    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.end(html.toString());
    }

    else if(req.url == '/style.css'){
        var cssPath = path.join(__dirname,req.url);
        var fileStream = fs.createReadStream(cssPath,"UTF-8");
        res.statusCode = 200;
        res.setHeader('Content-Type','text/css');
        fileStream.pipe(res);
    }

    else if(req.url == '/Photo.jpg'){
        var imgPath = path.join(__dirname,req.url);
        var fileStream = fs.createReadStream(imgPath);
        res.writeHead(200,{"Content-Type":"image/jpg"});
        fileStream.pipe(res);
    }

    else if(req.url == '/about'){
        res.writeHead(200,{"Content-Type":"text/html"});
        const about = fs.readFileSync("about.html");
        res.end(about.toString());
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"});
        const error = fs.readFile('error.html',function(err,data){
            res.end(data);
        })
    }
});

//Listening the server
server.listen(port,hostname,()=>{
    console.log(`Server is listening at http://${hostname}:${port}`);
});