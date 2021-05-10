import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { CarsType } from '../types'
import Button_Secondary from '../components/Button_Secondary'

type Props = {
    carItems: CarsType
}

const CarCard: React.FC<Props> = ({
    carItems
}) => {
    return (
        <View style={styles.carCardContainer}>
            <Text style={styles.brandTitle}>{carItems.brandName}</Text>
            <Text style={styles.gearTransmisionText}>{carItems.gearTransmision}</Text>
            <View style={styles.imgContainer}>
                {/* <Image source=""/> */}
            </View>
            <Text style={styles.rentPriceText}>$ {carItems.rentPrice}/day</Text>
            <Button_Secondary btnText="Select" />
            <Text style={styles.moreText}>more</Text>
        </View>
    )
}

export default CarCard

const styles = StyleSheet.create({
    carCardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'lightgrey'
    },
    brandTitle: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginTop: 15,
    },
    gearTransmisionText: {
        fontWeight: 'bold'
    },
    imgContainer: {
        width: 320,
        height: 200,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
    },
    rentPriceText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    moreText: {
        marginVertical: 10,
    }
})
