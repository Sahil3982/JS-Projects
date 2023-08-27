const arr=[1,2,4,4,5,2];
for (const num of arr) {
    // console.log(num);
}
arr.forEach(element => {
//    console.log(element); 
});

//Maps
const map=new Map()
map.set('USA',"United States of America");
map.set('IN',"India");
// console.log(map);
map.set('IN',"United India")
// console.log(map);
for (const [key,value23] of map) {
    // console.log(key,":",value23);
}

const myobject ={
    'game1':'NFS',
    'game2':'Spid'
}
