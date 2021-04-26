import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { CarsType } from '../App'
import Button_Secondary from '../components/Button_Secondary'

type Props = {
    carItems: CarsType
}

const CarCard: React.FC<Props> = ({
    carItems
}) => {
    return (
        <View style={styles.carCardContainer}>
            <Text style={styles.brandTitle}>{carItems.brandNames}</Text>
            <Text style={styles.gearTransmisionText}>{carItems.gearTransmision}</Text>
            {/* <Image source=""/> */}
            <Text style={styles.rentPriceText}>$ {carItems.rentPrice}/D</Text>
            <Button_Secondary btnText="Select"/>
            <Text style={styles.moreText}>more</Text>
        </View>
    )
}

export default CarCard

const styles = StyleSheet.create({
    carCardContainer:{},
    brandTitle:{},
    gearTransmisionText:{},
    rentPriceText:{},
    moreText:{}
})
