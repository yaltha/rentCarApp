import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Tabs from "./components/Tabs";
import Account from "./screens/Account";
import Cars from "./screens/Cars";
import Rent from "./screens/Rent";
import TermsAndConditions from "./screens/TermsAndConditions";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator<RootStackParamList>();

export type CarsType = {
  brandNames: string;
  gearTransmision: string;
  rentPrice: number;
};

type RootStackParamList = {
  Account: { id: number };
  Cars: undefined;
  Home: undefined;
  Login: undefined;
  Rent: undefined;
  Signup: undefined;
  TermsAndConditions: undefined;
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStack.Navigator>
        <RootStack.Screen name="Account" component={Account} />
        <RootStack.Screen name="Cars" component={Cars} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Rent" component={Rent} />
        <RootStack.Screen name="Signup" component={Signup} />
        <RootStack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
        />
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
      </RootStack.Navigator>
      {/* <Tabs /> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
