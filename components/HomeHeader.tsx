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
import { RootStackParamList } from './StackNavigator'

type HomeHeaderScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Home'>

type Props = {
  navigation:  HomeHeaderScreenNavigationProps
}

const HomeHeader = ({navigation}:Props) => {
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
    // marginTop: StatusBar.currentHeight,
    paddingVertical: 20,
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
