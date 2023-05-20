const add = (a,b) =>{
    return a+b;
}

const sub = (a,b) => {
    if(a>b) return a-b;
    else return b-a;
}

const mult = (a,b) => {
    return a*b;
}

const name = "Shubham";

// module.exports.add = add; 
// module.exports.sub = sub;
// module.exports.name = name;

//This way we are passing the add,sub and name as a property


/* A better way to write the above exports is using :- */

module.exports = {add,sub,mult,name};
