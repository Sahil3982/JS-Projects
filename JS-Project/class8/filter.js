const mynum =[1,2,3,4,5,6,7,8];
const n=mynum.filter( (item)=>{
    return item<5;
})
console.log(n);


const p =mynum.map (( item)=> item+10)
console.log(p);