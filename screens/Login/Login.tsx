import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../components";
// import ButtonAuthentication from "../../components/Button_Auth";
import InputAuthentication from "../../components/Input_Auth";
import { TopNavigatorParamsList } from "../../types";

export interface LoginProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, 'Login'>
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
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
      {/* <ButtonAuthentication buttonText="login" /> */}
      <Button
        onPress={() => navigation.navigate('Tabs')}
        text="login"
        iconName='user-circle'
        iconType='font-awesome-5'
        btnStyles={styles.btnLogin}
        textStyle={styles.btnTxt}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
      >
        <Text >go to Sign Up</Text>
      </TouchableOpacity>
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
    marginBottom: 50
  },
  btnLogin: {
    position: "absolute",
    bottom: 0,
    // marginTop: 50,
    marginBottom: 0,
    width: Dimensions.get('window').width,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
  },
  btnTxt: {
    fontSize: 16,
    marginRight: 10
  }
});
