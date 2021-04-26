import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
    buttonText: String,
}

const ButtonAuthentication: React.FC<Props> = ({buttonText}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default ButtonAuthentication

const styles = StyleSheet.create({
    buttonContainer:{
        width: Dimensions.get('window').width,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#ffc100',
        paddingVertical: 15,
    },
    buttonText:{
        fontSize: 36,
        fontWeight: 'bold',
        textAlign:'center',
        color: '#fff'
    }
})
