import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { StackNavigationProp } from '@react-navigation/stack'
import { TopNavigatorParamsList } from '../../types'

export interface SplashProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'Splash'>
}

const Splash: React.FC<SplashProps> = ({navigation}) => {
    return (
        <View style={styles.root}>
            <Text style={styles.greeting}>Splash</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>navigation.navigate('Tabs')}
                >
            <Text>Tap to Enter</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Splash

