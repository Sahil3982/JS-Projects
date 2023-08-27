const user = {
    Name: {
        firstname: "Sahil",
        lastname: "Patel"
    },
    age: 21,
    address:"Kanpur"
}
// console.log(user.Name.firstname);

const object1={a:1,b:2,c:3};
const object2={a:4,b:5,c:6};
const object3={a:24,b:52,c:62};
const obj=Object.assign({},object1,object2,object3);
console.log(obj); 