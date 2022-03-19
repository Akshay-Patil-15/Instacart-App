import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MainScreen from "../screens/MainScreen";
import ResultScreen from "../screens/ResultScreen";
import React from "react";

const Stack = createStackNavigator();

function MyStack({ result, setResult, fields, setFields, time, setTime }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Stack.Screen name="MainScreen" component={MainScreen} /> */}
      <Stack.Screen
        name="MainScreen"
        children={(props) => (
          <MainScreen
            {...props}
            setResult={setResult}
            setFields={setFields}
            setTime={setTime}
          />
        )}
      ></Stack.Screen>
      {/* <Stack.Screen name="ResultScreen" component={ResultScreen} /> */}
      <Stack.Screen
        name="ResultScreen"
        children={(props) => (
          <ResultScreen
            {...props}
            result={result}
            fields={fields}
            time={time}
          />
        )}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default MyStack;
