const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', () =>{
    console.log("Started");
})

eventEmitter.emit('start');

eventEmitter.on('begin',number => {
    console.log(`started ${number}`);
});

eventEmitter.emit('begin',23);

eventEmitter.on('theStart' , (start,end) => {
    console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('theStart',1,100);