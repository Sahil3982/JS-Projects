let n=9;
const myobject={
    name :"sahil",
    age:21
}
function Myfunction(anyobject){
    console.log(`My name is ${anyobject.name} ang my age is ${anyobject.age}`);
}
Myfunction(myobject);

function mysecondfun(value1,value2,value3,...num2){
    return num2;
}
console.log(mysecondfun(3,5,4,5,6,7));

function mysecondfun1(myarray){
    return myarray;
}
console.log(mysecondfun1([2,3,4,56,6]));
