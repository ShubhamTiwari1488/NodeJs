const EventEmitter = require('events'); //Importing the events class

const event = new EventEmitter();   //Creating an object of events class

//Creating an event and listening to it
event.on("sayName",()=>{
    console.log("My Name is Shubham Tiwari");
})

event.on("sayName",()=>{
    console.log("I am a student");
})

event.on("sayName",()=>{
    console.log("Welcome !!");
})

event.emit("sayName");