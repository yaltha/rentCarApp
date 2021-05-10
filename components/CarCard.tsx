import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { CarsType, TabNavigatorParamsList } from '../types'
import Button_Secondary from '../components/Button_Secondary'
import Button from './Button/Button'
import { StackNavigationProp } from '@react-navigation/stack'

type Props = {
    carItems: CarsType,
    navigation: StackNavigationProp<TabNavigatorParamsList, "Rent">;
}

const CarCard: React.FC<Props> = ({
    carItems,
    navigation
}) => {
    // const imgUri = carItems.image
    return (
        <View style={styles.carCardContainer}>
            <Text style={styles.brandTitle}>{carItems.brandName}</Text>
            <Text style={styles.gearTransmisionText}>{carItems.gearTransmision}</Text>
            <View
            // style={styles.imgContainer}
            >
                <Image source={{ uri: carItems.image }}
                    style={styles.carImg}
                />
            </View>
            <Text style={styles.rentPriceText}>$ {carItems.rentPrice} /day</Text>
            <Button
                btnStyles={styles.btn}
                textStyle={styles.btnText}
                text="select"
                iconType="font-awesome-5"
                iconName="check-circle"
                onPress={() => navigation.navigate("Rent")}
            />
            {/* <Button_Secondary btnText="Select" /> */}
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
    // imgContainer: {
    // width: 320,
    // height: 200,
    // backgroundColor: 'lightgrey',
    // marginVertical: 10,
    // },
    carImg: {
        width: '100%',
        height: 200,
        marginVertical: 10,

    },
    rentPriceText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    moreText: {
        marginVertical: 10,
    },
    btn: {
        width: 205,
        height: 50,
        paddingTop: 12,
        paddingRight: 10
    },
    btnText: {
        fontSize: 18,
    }
})
