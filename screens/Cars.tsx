import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CarsType } from '../App'
import Data from '../cars.json'
import CarCard from '../components/CarCard'

type Props = {
    carItems: CarsType[]
}
const Cars: React.FC<Props> = ({carItems}) => {
    return (
        <SafeAreaView>
            <Text>available cars</Text>
            {/* <FlatList
                // keyExtractor ={}
                data={Data}
                renderItem={({item})=>{
                    return <CarCard carItems ={item}/>
                }}
                showsVerticalScrollIndicator={false}
            /> */}
        </SafeAreaView>
    )
}

export default Cars

const styles = StyleSheet.create({})
