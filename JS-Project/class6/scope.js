console.log(addone(7));

function addone(value){
    return value+1;
}
console.log(addtwo(7));  // We cannot placed before initilization as a special case
const addtwo = function(value){
    return value+2;
}
