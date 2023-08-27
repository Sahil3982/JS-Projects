let Person={
    name:'SAHIL',
    age:21,
    color:'Brown'
}
let Student ={
    rollno:45
}
let destination=Object.assign({},Person,Student);
console.log(Person.age);
console.log(Person.Object);
console.log(destination);

let dest={...Person};
console.log(dest);
