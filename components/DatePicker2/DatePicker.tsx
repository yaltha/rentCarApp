import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { ModalDatePicker } from 'react-native-material-date-picker'

const DatePicker = () => {
    return (
        <View style={{
            flex: 1,
            alignSelf: 'stretch'
        }}>
            <ModalDatePicker
                button={<Text>Open</Text>}
                // locale='tr'
                onSelect={(date) => console.log(date)}
                isHideOnSelect={true}
                initialDate={new Date()}

            />
        </View>
    )
}

export default DatePicker

const styles = StyleSheet.create({})
