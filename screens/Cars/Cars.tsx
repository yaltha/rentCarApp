import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CarsType, TabNavigatorParamsList } from '../../types'
import Data from '../../carsData'
import CarCard from '../../components/CarCard'
import { StackNavigationProp } from '@react-navigation/stack'

type Props = {
    // carItems: CarsType[],
    navigation: StackNavigationProp<TabNavigatorParamsList, "Rent">;

}
const Cars: React.FC<Props> = ({
    // carItems,
    navigation
}) => {
    return (
        <SafeAreaView>
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <Text style={styles.title}>available cars</Text>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={Data}
                renderItem={({ item }) => {
                    return <CarCard carItems={item} navigation={navigation} />
                }}
                showsVerticalScrollIndicator={false}
            />
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default Cars

const styles = StyleSheet.create({
    title: {
        textTransform: 'uppercase',
        marginVertical: 10,
        marginLeft: 10,
        fontWeight: 'bold'
    }
})
