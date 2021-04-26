import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
    btnText: String
}

const Button_Secondary: React.FC<Props> = ({
    btnText
}) => {
    return (
        <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnTextStyle}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default Button_Secondary

const styles = StyleSheet.create({
    btnContainer:{
        width: 205,
        height: 50,
        backgroundColor: '#ffc100',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnTextStyle:{
        fontSize: 18,
        color: '#0f0f0f',
        fontWeight: 'bold'
    }
})
