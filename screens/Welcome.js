import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../tabs/Home";
import Chat from "../tabs/Chat";
import Cart from "../tabs/Cart";
import Profile from "../tabs/Profile";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Welcome = ({ route }) => {
  const { userId, name } = route.params;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 80,
          paddingBottom: 20,
          borderRadius: 35,
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 50,
        },

        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          horizontal: 10,
          margin: 10,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }
          if (route.name === "Chat") {
            iconName = focused ? "chatbubble" : "chatbubble-outline";
          }
          if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          }
          if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ userId, name }}
      />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
