 
import React, { useRef } from 'react';
import { Paystack, paystackProps } from 'react-native-paystack-webview';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { GREEN_COLORS, WHITE_COLORS } from '../src/utils/Mycolors';

export default function Cardpayment({navigation}) {
  const storeData = useSelector((state) => state.CartSlice);
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);


  let amount = 0;
    storeData.forEach(element => {
      amount += element.price * element.quantity;
    });

  return (
    <View style={styles.container}>
      <Paystack
        paystackKey="pk_test_d8e9284c593a2778bba3a2d1ed86eecd50cc0d68"
        paystacSecretkKey="sk_test_736af23bcefea5582c16115b990a0b5687db3e8b"
        billingEmail="appiagyeialfred815@gmail.com"
        billingMobile="1234567891"
        channels={["card"]}
        billingName="Alfred"
        currency='GHS'
        amount={amount}
        onCancel={(e) => {
          console.log(e)
        }}
        onSuccess={(res) => {
          navigation.navigate('OderPlaced')
          console.log(res)
        }}
        ref={paystackWebViewRef}
      />

      <TouchableOpacity
        onPress={() => paystackWebViewRef.current.startTransaction()}
        style={styles.pay}
      >
        <Text style={{color:WHITE_COLORS.WHITE, fontSize:20}}>Pay With Card</Text>
      </TouchableOpacity >
  </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLORS.WHITE,
    alignItems:"center",
    justifyContent:"center"

  },
  pay: {
    height: 50,
    backgroundColor: GREEN_COLORS.GREEN,
    width: 350,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    fontWeight:"bold"
  }
});