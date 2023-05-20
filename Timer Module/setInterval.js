const id = setInterval(() => {
    console.log("This is the statement will be printed after every fixed interval");
},1500);

clearInterval(id);

process.nextTick(() =>{
    console.log("This is the next Process after the current process done");
});

// const myFunction = () => {
//     console.log("Hey I am inside myFunction");

//     setTimeout(myFunction,1200);
// };

// setTimeout(myFunction,3000);

/* The setTimeout and setInterval are available in nodejs through the Timers Module */
