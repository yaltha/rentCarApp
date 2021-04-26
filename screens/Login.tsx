import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonAuthentication from "../components/Button_Auth";
import InputAuthentication from "../components/Input_Auth";

const Login = () => {
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginText}>login</Text>
      <InputAuthentication
        labelText="Email"
        placeholder="your email address..."
        keyboardType="email-address"
      />
      <InputAuthentication
        labelText="Password"
        placeholder="your password..."
        keyboardType="visible-password"
      />
      <ButtonAuthentication buttonText="login" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: 64,
    fontWeight: 'bold',
  },
});
