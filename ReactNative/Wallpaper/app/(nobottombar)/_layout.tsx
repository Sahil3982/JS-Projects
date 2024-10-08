import { Link, Slot } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const _layout = () => {
  return (
    <View>
      <Text>Go Back</Text>
      <View>
        {" "}
        <Slot />
      </View>
    </View>
  );
};

export default _layout;
