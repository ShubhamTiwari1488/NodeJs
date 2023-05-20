const os = require('os');

//OS Arch
console.log(os.arch());

//OS free Memory
const freemem = os.freemem();

console.log(freemem+" in bytes");

console.log(`Free Memory is :- ${freemem / 1024 / 1024 /1024 } in GB`);

// OS total Memory
const totalMem = os.totalmem();

console.log(`Total Memory is :- ${totalMem /1024/1024/1024} in GB`);

//Printing hostname and other stuff

console.log(os.hostname()); //Printing the hostname
console.log(os.platform()); //Printing my plateform ,i.e android , windows , linux
console.log(os.type()); //Printing my operating system
console.log(os.tmpdir());   //Printing the temp directory