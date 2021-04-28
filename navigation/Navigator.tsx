import React from 'react'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { RootNavigatorParamsList, TopNavigatorParamsList } from '../types'

import { Splash } from '../screens'

const RootStack = createStackNavigator<RootNavigatorParamsList>()
const MainStack = createStackNavigator<TopNavigatorParamsList>()

import TabNavigator from './TabNavigator'

const MainNavigator: React.FC = () => {
    const { Navigator, Screen } = MainStack
    
    return(
        <Navigator headerMode='none'initialRouteName='Splash'>
            <Screen name='Splash' component={Splash}/>
            <Screen name='Tabs' component={TabNavigator}/>
        </Navigator>
    )
}

const RootNavigator: React.FC = () => {
    const { Navigator, Screen } = RootStack
    
    return (
        <Navigator
            headerMode='none'
        >
            <Screen name='Main' component={MainNavigator}/>
        </Navigator>
    )
    
}

export default RootNavigator