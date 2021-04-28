import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from './navigation/Navigator'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainNavigator/>
    </NavigationContainer>
  );
}

