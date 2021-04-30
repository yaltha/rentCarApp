import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import styles from "./styles";

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <View style={styles.img}></View>
        {/* <Image style={styles.accountImage}/> */}
        <Text style={styles.nameText}>John Doe</Text>
      </View>

      <Text style={styles.currentDepositText}>Current Deposit</Text>
      <Text style={styles.depositAmountText}>$ 450.00</Text>
      <Text style={styles.addMoreText}>Add more</Text>

      <View style={styles.currentOrderCard}>
        <Text style={styles.cardTitleText}>My Current Order</Text>
        <Text style={styles.nothingText}>you have no order</Text>
      </View>
      <View style={styles.recentRentingCard}>
        <Text style={styles.cardTitleText}>Recent Renting</Text>
        <Text style={styles.nothingText}>you have no recent renting</Text>
      </View>
    </View>
  );
};

export default Account;
