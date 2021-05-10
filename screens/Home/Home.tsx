import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
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
        <Button
          btnStyles={styles.btnOrder}
          textStyle={styles.btnTextOrder}
          text="order"
          iconType="font-awesome-5"
          iconName="clipboard-list"
          onPress={() => navigation.navigate("Rent")}
        />

        <Text style={styles.buttonLabel}>Let’s see available cars:</Text>
        <Button
          btnStyles={styles.btn}
          textStyle={styles.btnText}
          text="available cars"
          iconType="font-awesome-5"
          iconName="car-alt"
          onPress={() => navigation.navigate("Cars")}
        />

        <Text style={styles.buttonLabel}>
          Please read our Terms and Coditions here
        </Text>
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
    justifyContent: 'center'
  },
  buttonLabel: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 5,
    alignSelf: 'center'
  },
  btnOrder: {
    paddingVertical: 30,
    paddingRight: 20
  },
  btnTextOrder: {
    fontSize: 20,
  },
  btn: {
    paddingVertical: 10,
  },
  btnText: {
    fontSize: 15,
  },
});
