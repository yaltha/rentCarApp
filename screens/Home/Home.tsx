import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button_Main from '../../components/Button_Main'
import Button_Secondary from '../../components/Button_Secondary'
import HomeHeader from '../../components/HomeHeader'
import SearchField from '../../components/SearchField'

const Home = ({}) => {
    return (
        <View style={styles.homeContainer}>
            <HomeHeader/>
            <SearchField/>
            <Text style={styles.buttonLabel}>Let’s make an order</Text>
            <Button_Main btnText="ORDER" />
            <Text style={styles.buttonLabel}>Let’s see available cars:</Text>
            <Button_Main btnText="available cars"/>
            <Text style={styles.buttonLabel}>Please read our Terms and Coditions here</Text>
            <Button_Secondary btnText="Terms & Conditions"/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homeContainer:{
        flex:1,
        alignItems:'center',
    },
    buttonLabel:{
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 15,
    },
})
