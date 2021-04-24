import React from "react";
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Welcome, John</Text>
      <TouchableOpacity style={styles.avatar}>
        {/* <Image source={} style={styles.avatarImage}/> */}
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    width: (Dimensions.get("window").width)-30,
    marginTop: StatusBar.currentHeight,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'papayawhip'

  },
  headerText: {
    fontSize:18,
    fontWeight:'bold',
  },
  avatar: {
      width: 50,
      height:50,
      borderRadius:50,
      backgroundColor: 'grey',
      borderWidth: 1,
      borderColor: "#ffc100"
  },
  avatarImage: {},
});
