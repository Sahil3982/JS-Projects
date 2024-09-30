import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React = require("react");
import { StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

const Reorder = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reorder</Text>
    </View>
  );
};

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cart</Text>
    </View>
  );
};
const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account</Text>
    </View>
  );
};

const Index = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HOME" component={Home} />
      <Tab.Screen name="REORDER" component={Reorder} />
      <Tab.Screen name="CART" component={Cart} />
      <Tab.Screen name="ACCOUNT" component={Account} />
    </Tab.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
