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

import { StackNavigationProp } from '@react-navigation/stack'
import { TabNavigatorParamsList } from "../types";

export interface HomeHeaderProps {
  navigation: StackNavigationProp<TabNavigatorParamsList, 'Account'>
}

const HomeHeader: React.FC<HomeHeaderProps> = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Welcome, John</Text>
      <TouchableOpacity style={styles.avatar} onPress={()=>navigation.navigate('Account')}>
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
