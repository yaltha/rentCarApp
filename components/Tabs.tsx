import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Account from "../screens/Account";
import Cars from "../screens/Cars";
import Rent from "../screens/Rent";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#ffc100",
        labelStyle: {
          // fontSize:12,
          // backgroundColor:'yellow'
        },
        style: {
          height: 50,
          padding: 10,
          position: 'absolute',
        },
        keyboardHidesTabBar: true
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cars"
        component={Cars}
        options={{
          tabBarLabel: "Cars",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="car-multiple"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Rent"
        component={Rent}
        options={{
          tabBarLabel: "Rent",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car-key" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={Account}
        options={{
          tabBarLabel: "Me",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

// const styles = StyleSheet.create({});
