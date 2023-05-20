const id = setTimeout(() => {
    console.log("Hello Everyone");
},2000);

clearTimeout(id);   //It will stop the event

setTimeout(() => {
    console.log("After");
},0);

console.log("Before");
console.log("One more statement");

const myFunction = () => {
    console.log("This is myFunction");
};

myFunction();