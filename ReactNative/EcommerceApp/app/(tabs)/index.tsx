import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Expo's vector icons
import Home from "../Pages/Home";
import Reorder from "../Pages/Reorder";
import Cart from "../Pages/Cart";
import Account from "../Pages/Account";

const Tab = createBottomTabNavigator();
const Index = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HOME") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "REORDER") {
            iconName = focused ? "refresh" : "refresh";
          } else if (route.name === "CART") {
            iconName = focused ? "shopping-cart" : "shopping-cart";
          } else if (route.name === "ACCOUNT") {
            iconName = focused ? "user" : "user";
          }

          // You can return any icon component here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
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
