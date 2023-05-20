const path = require('path');

console.log(__dirname); //It is a Global Variable

console.log(path.dirname('C:\Users\KIIT\Desktop\Practice\Path.js'));
console.log(path.extname('C:\Users\KIIT\Desktop\Practice\Path.js'));
console.log(path.basename('C:\Users\KIIT\Desktop\Practice\Path.js'));

//The above three can be done in one !!

console.log(path.parse('C:/Users/KIIT/Desktop/Practice/Path.js'));

console.log(path.parse('C:\Users\KIIT\Desktop\Practice/Path.js'));

const myPath = path.parse('C:/Users/KIIT/Desktop/Practice/Path.js');

console.log(`The name of the file is : ${myPath.name}`);
