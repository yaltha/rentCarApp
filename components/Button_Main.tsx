import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props ={
    btnText: String,
    onPress: () => void,
    // style: {}
}

const Button_Main: React.FC<Props> = ({
    btnText, 
    // style,
    onPress
    }) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
            <Text style={styles.btnTextStyle}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default Button_Main

const styles = StyleSheet.create({
    btnContainer:{
        width: 300,
        height: 85,
        marginBottom: 20,
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
        fontSize:38,
        color: 'white',
        fontWeight: 'bold'
    }
})
