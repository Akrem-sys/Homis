import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Signin } from "./screens/Signin";
import { Signup } from "./screens/Signup";
import { Tabnavigator } from "./screens/Tabnavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signin"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Tabnavigator" component={Tabnavigator} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
