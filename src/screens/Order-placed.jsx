import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { myColors } from "../utils/Mycolors";
const orderplaced = require('../../assets/orderplaced.png');

const Orderplaced = ({navigation}) => {
    //   const nav = useNavigation();
    //   useEffect(() => {
    //     setTimeout(() => {
    //       nav.navigate("Home");
    //     }, 2000);
    //   }, []);
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white",
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
            <Text style={{ fontSize: 20, textAlign: "center", color:"#808080" }}>
                Thanks for your order. Please continue
                browsing
            </Text>



            <TouchableOpacity
                onPress={() => {
                    
                    navigation.navigate('Home')
                }}
                activeOpacity={0.8}
                style={{
                    backgroundColor: myColors.primary,
                    borderRadius: 30,
                    width:350,
                    height: 70,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>CONTINUE</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    
                    navigation.navigate('TrackOrder')
                }}
                activeOpacity={0.8}
                style={{
                    backgroundColor: "#fff",
                    borderWidth:2,
                    borderColor: myColors.primary,
                    borderRadius: 30,
                    width:350,
                    height: 70,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text style={{ color: myColors.primary, fontSize: 18, fontWeight: "700" }}>TRACK YOUR ORDER</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Orderplaced;