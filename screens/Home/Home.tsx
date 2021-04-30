import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button_Main from "../../components/Button_Main";
import Button_Secondary from "../../components/Button_Secondary";
import HomeHeader from "../../components/HomeHeader";
import SearchField from "../../components/SearchField";
import { TabNavigatorParamsList } from "../../types";

export interface HomeProps {
  navigation: StackNavigationProp<TabNavigatorParamsList,
   "Account"
   >;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <HomeHeader navigation={navigation}/>
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
      <Button_Main btnText="ORDER" onPress={()=> navigation.navigate('Rent')}/>
      <Text style={styles.buttonLabel}>Let’s see available cars:</Text>
      <Button_Main btnText="available cars" onPress={()=>navigation.navigate('Cars')}/>
      <Text style={styles.buttonLabel}>
        Please read our Terms and Coditions here
      </Text>
      <Button_Secondary btnText="Terms & Conditions" />
    </View>
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
});
