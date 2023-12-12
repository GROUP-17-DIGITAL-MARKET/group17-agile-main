
import React, { useEffect, useRef, useState } from 'react';
import { Paystack, paystackProps } from 'react-native-paystack-webview';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';


export default function MobileMoney({navigation}) {
 
  const storeData = useSelector((state) => state.CartSlice);
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);

  let amount = 0;
    storeData.forEach(element => {
        amount += element.price
    });


 

  return (
    <View style={styles.container}>
    <Paystack
      paystackKey="pk_test_d8e9284c593a2778bba3a2d1ed86eecd50cc0d68"
      paystackSecretKey="sk_test_736af23bcefea5582c16115b990a0b5687db3e8b"
      billingEmail="appiagyeialfred815@gmail.com"
      billingMobile="0555078657"
      billingName="Alfred"
      channels={["mobile_money"]}
      currency="GHS"
      amount={amount}
      onCancel={(e) => {
        console.log(e);
      }}
      onSuccess={(res) => {
       navigation.navigate('OderPlaced')
        console.log(res);
       
      }}
      ref={paystackWebViewRef}
    />

    <TouchableOpacity
      onPress={() => paystackWebViewRef.current.startTransaction()}
      style={styles.pay}
    >
      <Text style={{ color: '#fff', fontSize: 20 }}>Pay With MoMo</Text>
    </TouchableOpacity>
  </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:"center"

  },
  pay: {
    height: 50,
    backgroundColor: "#53E559",
    width: 350,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    fontWeight:"bold"
  }
});