import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MainScreen from "../screens/MainScreen";
import ResultScreen from "../screens/ResultScreen";
import React from "react";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
