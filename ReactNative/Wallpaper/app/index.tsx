import { Button, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
export default function () {
  const [count, setcount] = useState(0);

  useEffect(() => {
    let time = setInterval(() => {
      setcount(count => count + 1);
    }, 1000);
 return ()=>{
    clearInterval(time);

 }
  },[]);
  return (
    <View>
      <Button title="Login"></Button>
      <Text>{count}</Text>
      <Button title="Stop" ></Button>
      <Button title="Singup" color={"green"}></Button>


       <Link href='/account'>Click</Link>
    </View>
    
  );
}
