import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { GRAY_COLORS, GREEN_COLORS, WHITE_COLORS, myColors } from "../../../utils/Mycolors";
const orderplaced = require('../../../../assets/orderplaced.png');

const Orderplaced = ({navigation}) => {

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: WHITE_COLORS.WHITE,
                justifyContent: "center",
                alignItems: "center",
                gap:20
            }}
        >
            <StatusBar backgroundColor="white" />
            <Image source={orderplaced} />
            <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "600" }}>
                Congrats,Your Order Places Successfully!!
            </Text>
            <Text style={{ fontSize: 20, textAlign: "center", color:GRAY_COLORS.GRAY }}>
                Thanks for your order. Please continue
                browsing
            </Text>



            <TouchableOpacity
                onPress={() => {
                    
                    navigation.navigate('Home')
                }}
                activeOpacity={0.8}
                style={{
                    backgroundColor: GREEN_COLORS.GREEN,
                    borderRadius: 30,
                    width:350,
                    height: 70,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text style={{ color: WHITE_COLORS.WHITE, fontSize: 18, fontWeight: "700" }}>CONTINUE</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    
                    navigation.navigate('TrackOrder')
                }}
                activeOpacity={0.8}
                style={{
                    backgroundColor: WHITE_COLORS.WHITE,
                    borderWidth:2,
                    borderColor: GREEN_COLORS.GREEN,
                    borderRadius: 30,
                    width:350,
                    height: 70,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text style={{ color: GREEN_COLORS.GREEN, fontSize: 18, fontWeight: "700" }}>TRACK YOUR ORDER</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Orderplaced;