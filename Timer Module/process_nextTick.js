console.log("Hello => number 1");

setImmediate(() => {
    console.log("Running before the timeout => number3");
})

setTimeout(() => {
    console.log("The timeout running last => number 4");
})

process.nextTick(() => {
    console.log("Running at next tick => number 2");
})

function callMe(){
    console.log("This is callMe function");
}

console.log("This is the second callMe ..... just below this console.log");
callMe();


process.nextTick(callMe);

//Declaring one more process.nextTick function

process.nextTick(() => {
    console.log("We are in the third process.nextTick function");
    console.log("Calling the callMe function ......")
    callMe();
})