import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

interface ButtonProps {
    btnStyles: {}
    textStyle: {}
    text: string
    iconType: string
    iconName: string
}

const Button: React.FC<ButtonProps> = ({
    btnStyles,
    textStyle,
    text,
    iconType,
    iconName
}) => {
    return (
        <TouchableOpacity style={btnStyles}>
            <Icon type={iconType} name={iconName}/>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button