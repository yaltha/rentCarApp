import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

interface ButtonProps {
    btnStyles?: {}
    textStyle?: {}
    text: string
    iconType: string
    iconName: string
    onPress: () => void
}

const Button: React.FC<ButtonProps> = ({
    btnStyles,
    textStyle,
    text,
    iconType,
    iconName,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={[btnStyles, styles.defaultStyle]}
            onPress={onPress}>
            <Icon type={iconType} name={iconName} />
            <Text style={[textStyle, styles.textDefault]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    defaultStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#ffc100",
        borderRadius: 50,
        marginVertical: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textDefault: {
        marginLeft: 10,
        textTransform: 'uppercase',
        fontWeight: "bold",
    }
})