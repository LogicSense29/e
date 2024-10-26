import React from "react";
import { Colors } from "../../constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";

export default function Tablayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: {
          height: 80, // adjust this value to reduce the top space
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarShowLabel: false,
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name == "home") {
            iconName = "home";
            return <Feather name={iconName} size={24} color={color} />;
          } else if (route.name === "search") {
            iconName = "search";
            return <Feather name={iconName} size={24} color={color} />;
          } else if (route.name === "profile") {
            iconName = "user";
            return <Feather name={iconName} size={24} color={color} />;
          }
        },
      })}
    >
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
