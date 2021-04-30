import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Button_Main from '../../components/Button_Main'
import CarCard from '../../components/CarCard'
import { styles } from './styles'

const Rent = () => {
    const [isSelectedCar, setIsSelectedCar] = useState(false)
    return (
        <View style={styles.rentContainer}>
            <Text style={styles.subTitleText}>select a car</Text>
            <View style={styles.selectCarContainer}>
                    <Text>select a car</Text>
                 </View>
            {/* {
                isSelectedCar ? 
                (<View style={styles.selectCarContainer}>
                    <Text>select a car</Text>
                 </View>) : 
                (<CarCard/>)
                } */}
            
            <Text style={styles.subTitleText}>gear transmision</Text>
            <View style={styles.gearTransmisionContainer}>
                <TouchableOpacity style={styles.manualStyle}>
                    <Text style={styles.gearText}>manual</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.autoMaticStyle}>
                    <Text style={styles.gearText}>auto-matic</Text>
                </TouchableOpacity>
            </View>
            
            <Text style={styles.subTitleText}>rent date</Text>
            <View style={styles.pickDateContainer}>
                <Text>Start Renting:</Text>
                <TextInput style={styles.startDate} placeholder="start rent from..." keyboardType="default"/>
                <Text>End Renting:</Text>
                <TextInput style={styles.endDate} placeholder="end rent to..." keyboardType="default"/>
            </View>
            
            <Button_Main btnText="place order"/>
        </View>
    )
}

export default Rent
