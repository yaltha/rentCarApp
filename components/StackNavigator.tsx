import React from "react";
import { View, Text } from "react-native";

import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import Signup from "../screens/Signup/Signup";
import Account from "../screens/Account/Account";
import Cars from "../screens/Cars/Cars";
import Rent from "../screens/Rent/Rent";
import TermsAndConditions from "../screens/TermsAndConditions/TermsAndConditions";

import { createStackNavigator } from "@react-navigation/stack";

 export type RootStackParamList = {
  Account: { id: number };
  Cars: undefined;
  Home: undefined;
  Login: undefined;
  Rent: undefined;
  Signup: undefined;
  TermsAndConditions: undefined;
  Tabs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Cars" component={Cars} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Rent" component={Rent} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
