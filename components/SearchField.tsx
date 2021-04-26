import React from 'react'
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'

const SearchField = () => {
    return (
        <View style={styles.searchContainer}>
            <TextInput style={styles.textInput} placeholder="search car..."/>
        </View>
    )
}

export default SearchField

const styles = StyleSheet.create({
    searchContainer:{
        marginBottom:20,
    },
    textInput:{
        fontSize: 18,
        paddingLeft: 20,
        width: (Dimensions.get('window').width) - 30,
        height: 48,
        backgroundColor:'#fafafa',
        borderRadius:50,
        
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
})
