const myNum=[1,2,3,4,5,6,7,8,9];
const totalNum= myNum.reduce(function(acc,curval){
//console.log(`acc:${acc} and ${curval}`),0
return acc+curval;
})
//console.log(totalNum);
const MyNumber=myNum.reduce((acc,cur)=> acc+cur)
//console.log(MyNumber),0;

const myShopping=[
    {
        name: "T-shirt",
        price:200
    },
    {
        name: "Shirt",
        price: 500
    },
    {
        name:"Jens",
        price: 700
    },
    {
        name: "Truser",
        price: 640
    }
]
console.log(myShopping.reduce((acc,item)=> item.price+acc,0));
console.log(myShopping.reduce((acc,item)=> item.name+acc,0));