import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

 export default function foryou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Suggested" component={Suggested} />
    </Tab.Navigator>
  );
}


const Liked = () => {
  return (
    <View>liked</View>
  )
}
const Suggested = () => {
  return (
    <View>Suqqested</View>
  )
}



const Library = () => {
  return (
    <View>Librarcy</View>
  )
}


