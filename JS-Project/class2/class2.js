//Factory function

function createRectangle(){

return Rectangle={
length: 1,
breadth:2,
//creating a function within object 
draw (){ 
    console.log("DRAW TO TABLE");    //function definition
}


};  //object definition and declaration

}  //function definition and declaration

let obj=createRectangle(); // create reference variable for funtion with a unique variable
obj.draw(); // calling a function with dot operator
console.log(obj.length);
console.log(obj.breadth);
console.log(obj);
console.log(createRectangle);
//console.log(draw); //we cannot print directly draw function out side of function


//constructor function
function TTriangle(l){

     return Triangle={
        side: 2,
        Triangle(){
            console.log("Message");
        }
    };
}
let obj2 =TTriangle();
obj2.Triangle();

console.log(TTriangle);
console.log(obj2.Triangle);