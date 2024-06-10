import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ShortsScreen from "../screens/ShortsScreen";
import CreateScreen from "../screens/CreateScreen";
import SubsScreen from "../screens/SubsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Icon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#101010",
          borderTopColor: "grey",
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: "white",
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Shorts") {
            iconName = "videocamera";
          } else if (route.name === "Create") {
            iconName = "pluscircleo";
          } else if (route.name === "Subscriptions") {
            iconName = "book";
          } else if (route.name === "Profile") {
            iconName = "user";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shorts" component={ShortsScreen} />
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Subscriptions" component={SubsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
