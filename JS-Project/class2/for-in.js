let Rectangle={
    length:2,
    breath:5
};
for (const key in Rectangle) {
  
    console.log(key); // for printing object key

    console.log(Rectangle[key]);  // for accessing key value of an object 
        
    }

    for(const key of Object.keys(Rectangle)){
        console.log(key);
    }

    if('length1' in Rectangle)
    {
        console.log('Present');
    }
    else
    {
        console.log('Absent');
    }
