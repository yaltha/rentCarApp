import React, { useState } from "react";
import {
    Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import Button_Main from "../../components/Button_Main";
import CarCard from "../../components/CarCard";
import { styles } from "./styles";

const Rent = () => {
  const [isSelectedCar, setIsSelectedCar] = useState(false);
  return (
    <SafeAreaView style={styles.rentContainer}>
      <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.subTitleText}>select a car</Text>
        <TouchableOpacity style={styles.selectCarContainer}>
          <Icon type="font-awesome-5" name="plus" />
          <Text>select a car</Text>
        </TouchableOpacity>
        {/* {
                isSelectedCar ? 
                (<View style={styles.selectCarContainer}>
                    <Text>select a car</Text>
                 </View>) : 
                (<CarCard/>)
                } */}

        <Text style={styles.subTitleText}>gear transmision</Text>
        <View style={styles.gearTransmisionContainer}>
          <TouchableOpacity style={styles.manualStyle}>
            <Text style={styles.gearText}>manual</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.autoMaticStyle}>
            <Text style={styles.gearText}>auto-matic</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subTitleText}>rent date</Text>
        <View style={styles.pickDateContainer}>
          <TouchableOpacity
            style={styles.startDate}
            >
              <Text>Start Renting:</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.endDate}
            >
              <Text>End Renting:</Text>
          </TouchableOpacity>
        </View>

        {/* <Button_Main btnText="place order" /> */}
        <TouchableOpacity style={styles.ctaBtn}>
        <Icon type="font-awesome-5" name="chevron-circle-right"/>
            <Text style={styles.ctaBtnText}>place order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Rent;
