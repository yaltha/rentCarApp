import React, { useState } from "react";
import {
  Button,
  DatePickerAndroidStatic,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
// import DateTimePicker from '@react-native-community/datetimepicker'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import Button_Main from "../../components/Button_Main";
import CarCard from "../../components/CarCard";
import { styles } from "./styles";

interface RentProps {
  // onChange: number
}

const Rent = () => {
  const [isSelectedCar, setIsSelectedCar] = useState(false);

  //date picker useState
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)

  // const onChange = (
  //   event: React.ChangeEvent<DatePickerAndroidStatic>, selectedDate: Date
  // ) => {
  //   const currentDate = selectedDate || date
  //   setShow(Platform.OS === 'android')
  //   setDate(currentDate)
  // }

  // const showMode = (currentMode: string) => {
  //   setShow(true);
  //   setMode(currentMode)
  // }

  const showDatePicker = () => {
    setIsDatePickerVisible(true)
  }
  const hideDatePicker = () => {
    setIsDatePickerVisible(false)
  }

  const handleConfirmStartDate = (date: Date) => {
    // console.warn("A date has been picked", date)
    hideDatePicker()
    setStartDate(date)
  }
  const handleConfirmEndDate = (date: Date) => {
    // console.warn("A date has been picked", date)
    hideDatePicker()
    setEndDate(date)
  }

  // const showDatePicker = () => {
  //   showMode('date')
  // }

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
            onPress={showDatePicker}
          >
            <View style={styles.pickDate}>
              <Text>Start Renting</Text>
              <Icon type="font-awesome-5" name="calendar-check" />
            </View>
            <Text>{startDate.getDate()}/{startDate.getMonth() + 1}/{startDate.getFullYear()}</Text>
            {/* <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
            /> */}
            <DateTimePickerModal
              date={new Date()}
              isVisible={isDatePickerVisible}
              mode='date'
              onConfirm={handleConfirmStartDate}
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.endDate}
            onPress={showDatePicker}
          >
            <View style={styles.pickDate}>
              <Text>End Renting</Text>
              <Icon type="font-awesome-5" name="calendar-check" />
            </View>
            <Text>{endDate.getDate()}/{endDate.getMonth() + 1}/{endDate.getFullYear()}</Text>
            <DateTimePickerModal
              date={new Date()}
              isVisible={isDatePickerVisible}
              mode='date'
              onConfirm={handleConfirmEndDate}
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>
        </View>

        {/* <Button_Main btnText="place order" /> */}
        <TouchableOpacity style={styles.ctaBtn}>
          <Icon type="font-awesome-5" name="chevron-circle-right" />
          <Text style={styles.ctaBtnText}>place order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Rent;
