import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CarsType } from '../../types'
import Data from '../../cars.json'
import CarCard from '../../components/CarCard'

type Props = {
    carItems: CarsType[]
}
const Cars: React.FC<Props> = ({ carItems }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.title}>available cars</Text>
                <FlatList
                    // keyExtractor ={}
                    data={Data}
                    renderItem={({ item }) => {
                        return <CarCard carItems={item} />
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </ScrollView>
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
