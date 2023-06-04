//stream.pipe() is the method used to take a readable stream and connect it to the writable stream.

const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request',(req,res)=>{
    const rstream = fs.createReadStream('input.txt');

    rstream.pipe(res);
});

server.listen(3000,"127.0.0.1");