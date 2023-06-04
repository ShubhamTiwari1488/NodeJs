const fs = require('fs');
const http = require('http');

server = http.createServer();

server.on('request',(req,res)=>{
    const rstream = fs.createReadStream("input.txt");

    rstream.on("data",(user_data)=>{
        res.write(user_data);
    });

    rstream.on("end",()=>{
        res.end();
    });

    rstream.on("error",(err) =>{
        console.log(err);
        res.end("File Not Found");
    })
});

server.listen(3000,"127.0.0.1");