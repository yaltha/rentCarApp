import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

// import Home from "./screens/Home";
// import Login from "./screens/Login";
// import Signup from "./screens/Signup";
// import Tabs from "./components/TabsNavigator";
// import Account from "./screens/Account";
// import Cars from "./screens/Cars";
// import Rent from "./screens/Rent";
// import TermsAndConditions from "./screens/TermsAndConditions";

import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from './components/StackNavigator'

export type CarsType = {
  brandNames: string;
  gearTransmision: string;
  rentPrice: number;
};

// type RootStackParamList = {
//   Account: { id: number };
//   Cars: undefined;
//   Home: undefined;
//   Login: undefined;
//   Rent: undefined;
//   Signup: undefined;
//   TermsAndConditions: undefined;
//   Tabs: undefined
// };

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainStackNavigator/>
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
