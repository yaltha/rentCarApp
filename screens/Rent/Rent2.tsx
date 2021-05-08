import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import DatePicker from 'react-native-datepicker'


const Rent2 = () => {
    const [date, setDate] = useState(new Date())
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                React Native Date Picker – To Pick the Date using Native Calendar
        </Text>
            <DatePicker
                style={styles.datePickerStyle}
                date={date} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-2021"
                maxDate="01-01-2022"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        //display: 'none',
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                    },
                    dateInput: {
                        marginLeft: 36,
                    },
                }}
                onDateChange={(date: Date) => {
                    setDate(date);
                }}
            />
        </View>
    )
}

export default Rent2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
})
