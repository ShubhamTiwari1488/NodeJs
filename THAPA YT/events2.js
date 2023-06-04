const EventEmitter = require('events');

const event = new EventEmitter();

//Creating Events and passing parameter to it
event.on("checkPage",(sc,msg) =>{
    console.log(`Status Code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage",200,"ok");