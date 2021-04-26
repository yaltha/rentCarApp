import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Account = () => {
    return (
        <View>
            <View style={styles.account}>
                {/* <Image style={styles.accountImage}/> */}
                <Text>John Doe</Text>
            </View>
            
            <Text style={styles.currentDepositText}>Current Deposit</Text>
            <Text style={styles.depositAmountText}>$ 450.00</Text>
            <Text style={styles.addMoreText}>Add more</Text>
            
            <View style={styles.currentOrderCard}>
                <Text style={styles.nothingText}>you have no order</Text>
            </View>
            <View style={styles.recentRentingCard}>
                <Text style={styles.nothingText}>you have no recent renting</Text>
            </View>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    account:{},
    accountImage:{},
    currentDepositText:{},
    depositAmountText:{},
    addMoreText:{},
    currentOrderCard:{},
    nothingText:{},
    recentRentingCard:{}
})
