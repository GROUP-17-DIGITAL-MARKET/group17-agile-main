
import React, { useEffect, useRef, useState } from 'react';
import { Paystack, paystackProps } from 'react-native-paystack-webview';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { myColors } from '../src/utils/Mycolors';



export default function CashPayment({ navigation }) {



    return (
        <View style={styles.container}>
            <Text>Cash Payment</Text>
            <Text>proceed with your order</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('OderPlaced')}
                style={{
                    backgroundColor: myColors.primary,
                    width: 200,
                    height: 46,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    marginVertical: 20
                }}>
                <Text style={{ fontSize: 18, fontWeight: 600, color: "#fff" }}>
                    Proceed
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center"

    },

});