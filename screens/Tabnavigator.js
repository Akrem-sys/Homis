import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Map } from "./Map";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../assets/colors/Colors";

const Tab = createBottomTabNavigator();

export const Tabnavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Profile") {
            iconName = "person-circle-outline";
          } else if (route.name === "Map") {
            iconName = "map";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.Primarycolor,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
