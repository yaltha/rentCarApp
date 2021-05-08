import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { Icon } from 'react-native-elements/dist/icons/Icon'

type DatePickerProps = {
    dateStyle: {},
    dateText: string
}

const Date: React.FC<DatePickerProps> = ({
    dateStyle,
    dateText
}) => {
    const [date, setDate] = useState(new Date())
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)

    const showDatePicker = () => {
        setIsDatePickerVisible(true)
    }

    const hideDatePicker = () => {
        setIsDatePickerVisible(false)
    }

    const handleConfirmDate = (date: Date) => {
        hideDatePicker()
        setDate(date)
    }
    return (
        <TouchableOpacity
            style={dateStyle}
            onPress={showDatePicker}
        >
            <DateTimePickerModal
                date={new Date()}
                isVisible={isDatePickerVisible}
                mode='date'
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
            />
            <Icon type="font-awesome-5" name="calendar-check" />
            <Text style={styles.text}>{dateText}</Text>
            <Text style={styles.dateText}>
                {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
            </Text>

        </TouchableOpacity>
    )
}

export default Date

const styles = StyleSheet.create({
    text: {

    },
    dateText: {

    }
})
