setTimeout(() =>{
    console.log("Hello this statement runs after 2 sec");
},2000);

setTimeout(() =>{
    console.log("Hello this statement runs after 50ms");
},50);

const myFunction = (firstParam , secondParam) => {
    console.log(`The firstParam is ${firstParam} and the secondParam is ${secondParam}`);
}

setTimeout(myFunction,2000,"firstParam","secondParam");

