import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { TabNavigatorParamsList } from "../types";

import { Account, Home, Cars, Rent } from '../screens'

const TabStack = createBottomTabNavigator<TabNavigatorParamsList>();

const TabNavigator = () => {
  const { Navigator, Screen } = TabStack
  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#0F0909",
        labelStyle: {
          fontSize:12,
          paddingBottom: 10
        },
        style: {
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
          backgroundColor: '#ffc100',
          paddingTop: 10,
        },
        keyboardHidesTabBar: true,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
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
      <Screen
        name="Rent"
        component={Rent}
        options={{
          tabBarLabel: "Rent",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car-key" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Me",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
};

export default TabNavigator;
