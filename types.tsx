import { NavigatorScreenParams } from '@react-navigation/native'

export type CarsType = {
    brandNames: string
    gearTransmision: string
    rentPrice: number
  };

export type RootNavigatorParamsList = {
    Main: NavigatorScreenParams<TopNavigatorParamsList>
}
  
export type TopNavigatorParamsList = {
    Splash: undefined
    Tabs: undefined
}
  
export type TabNavigatorParamsList = {
// Account: { id: number };
Account: undefined
Cars: undefined
Home: undefined
Rent: undefined
};