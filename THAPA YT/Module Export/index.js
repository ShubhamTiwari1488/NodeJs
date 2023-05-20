// const oper = require('./operator.js');

// console.log(oper);

// console.log(oper.add(4,4));
// console.log(oper.sub(4,9));
// console.log(oper.name);


/* Another way to write the above code is :- */

const { add , sub ,mult, name} = require('./operator');

console.log(add(5,9));
console.log(sub(3,2));
console.log(mult(3,8));
console.log(name);

