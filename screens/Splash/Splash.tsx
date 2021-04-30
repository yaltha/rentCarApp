import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { StackNavigationProp } from '@react-navigation/stack'
import { TopNavigatorParamsList } from '../../types'
import { Icon } from 'react-native-elements'

export interface SplashProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'Splash'>
}

const Splash: React.FC<SplashProps> = ({navigation}) => {
    return (
        <View style={styles.root}>
            <Icon containerStyle={styles.iconContainer} type="font-awesome-5" name="car"/>
            <Text style={styles.greeting}>Rent Car</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>navigation.navigate('Tabs')}
                >
            <Text>Tap here to Enter</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Splash

