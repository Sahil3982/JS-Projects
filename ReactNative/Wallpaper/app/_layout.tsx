import { Link, Slot } from "expo-router";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { View } from "react-native";

const _layout = () => {
  return (
    <SafeAreaView>
<View style={{height : '90%'}}>
<Slot />

</View>
      <View style={{ backgroundColor: "green" , height: '10%' }}>
      <Link href="/">Click on for u</Link>

        <Link href="/account">Click on account</Link>
        <Link href="/explore">Click on explore</Link>
      </View>
    </SafeAreaView>
  );
};

export default _layout;
