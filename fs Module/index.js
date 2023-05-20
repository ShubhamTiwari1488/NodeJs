// const fs = require('fs');

// fs.stat('../demo.txt',(err,stats) => {
//     if(err){
//         console.error(err);
//     }

//     else{
//         console.log(stats);
//     }
// });

const fs = require('fs');

try{
    const stats = fs.statSync('../demo.txt');
    console.log(stats.birthtime);
    console.log(stats.size);
}

catch (err) {
    console.log(err);
}