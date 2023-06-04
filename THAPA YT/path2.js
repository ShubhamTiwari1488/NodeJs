const path = require('path');

console.log(__dirname);

dir_name = __dirname;   //Path of current file

console.log(path.extname(dir_name))
console.log(path.basename(dir_name))
console.log(path.dirname(dir_name))
console.log(path.join(dir_name,"Shubham"))  //It is used to join to form a new directory.
console.log(path.parse(dir_name))



