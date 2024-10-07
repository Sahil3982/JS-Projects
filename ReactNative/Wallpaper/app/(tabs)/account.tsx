import { Link } from "expo-router";
import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

const account = () => {
  return (
    <SafeAreaView>
      <Text>account</Text>
      <Link href={'./_layout'}>clcik</Link>
    </SafeAreaView>
  );
};

export default account;
