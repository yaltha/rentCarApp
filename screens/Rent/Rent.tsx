import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Button_Main from '../../components/Button_Main'
import CarCard from '../../components/CarCard'

const Rent = () => {
    const [isSelectedCar, setIsSelectedCar] = useState(false)
    
    return (
        <View>
            <Text>select a car</Text>
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
            
            <Text>gear transmision</Text>
            <View style={styles.gearTransmisionContainer}>
                <TouchableOpacity style={styles.manualStyle}>
                    <Text style={styles.gearText}>manual</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.autoMaticStyle}>
                    <Text style={styles.gearText}>auto-matic</Text>
                </TouchableOpacity>
            </View>
            
            <Text>rent date</Text>
            <View style={styles.pickDateContainer}>
                <Text>Start Renting:</Text>
                <TextInput style={styles.startDate} placeholder="start rent from..." keyboardType="default"/>
                <Text>End Renting:</Text>
                <TextInput style={styles.endDate} placeholder="end rent to..." keyboardType="default"/>
            </View>
            
            <Button_Main btnText="order"/>
        </View>
    )
}

export default Rent

const styles = StyleSheet.create({
    selectCarContainer:{},
    gearTransmisionContainer:{},
    manualStyle:{},
    gearText:{},
    autoMaticStyle:{},
    pickDateContainer:{},
    startDate:{},
    endDate:{}
})
