import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button_Main from "../../components/Button_Main";
import Button_Secondary from "../../components/Button_Secondary";
import { Button } from "../../components/";
import HomeHeader from "../../components/HomeHeader";
import SearchField from "../../components/SearchField";
import { TabNavigatorParamsList } from "../../types";

export interface HomeProps {
  navigation: StackNavigationProp<TabNavigatorParamsList, "Account">;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView>
        <HomeHeader navigation={navigation} />
        {/* <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome, John</Text>
        <TouchableOpacity
          style={styles.avatar}
          onPress={() => navigation.navigate("Account")}
        > */}
        {/* <Image source={} style={styles.avatarImage}/> */}
        {/* </TouchableOpacity>
      </View> */}

        <SearchField />
        <Text style={styles.buttonLabel}>Let’s make an order</Text>
        <Button_Main
          btnText="ORDER"
          onPress={() => navigation.navigate("Rent")}
        />
        <Text style={styles.buttonLabel}>Let’s see available cars:</Text>
        <Button_Main
          btnText="available cars"
          onPress={() => navigation.navigate("Cars")}
        />
        <Text style={styles.buttonLabel}>
          Please read our Terms and Coditions here
        </Text>
        <Button_Secondary btnText="Terms & Conditions" />
        <Button
          btnStyles={styles.btn}
          textStyle={styles.btnText}
          text="Terms & Conditions"
          iconType="font-awesome-5"
          iconName="hand-point-right"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#ffc100",
    marginVertical: 10,
    padding: 15,
    borderRadius: 50,
  },
  btnText: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});
