import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { EvilIcons, AntDesign, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import CustomTopTabNavigator from '../../Payments/MainRecommendationList';

import * as Location from 'expo-location';

export default function Checkout({ navigation }) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    
    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let currentLocation = await Location.getCurrentPositionAsync({});
          let { latitude, longitude } = currentLocation.coords;
    
          try {
            let address = await Location.reverseGeocodeAsync({ latitude, longitude });
            setLocation(address[0]);  
          } catch (error) {
            setErrorMsg('Error fetching address');
          }
        })();
      }, []);
    
      let text = 'Waiting...';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        const { street, city, region, country } = location;
    
         
        text = `Location: ${street}, ${city}`;
      }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                height: 150,
                backgroundColor: "#B7FFBA",
                marginTop: 55,
                flexDirection: "row",
                borderRadius: 20,
                borderColor: "#53E559",
                borderWidth: 2,
                paddingTop: 20
            }}>
                <View style={{
                    width: "25%",
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                    alignItems: "center"
                }}>
                    <MaterialIcons
                        name="my-location"
                        size={24}
                        color="#53E559"
                    />

                </View>
                <View style={{
                    width: "75%",
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20
                }}>
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>Home address</Text>
                    <Text style={{fontSize:17}}>{text}</Text>
                </View>

            </View>


            <View style={{
                height: 150,
                backgroundColor: "#fff",
                marginTop: 20,
                flexDirection: "row",
                borderRadius: 20,
                borderColor: "#141414",
                borderWidth: 1,
                paddingTop: 20
            }}>
                <View style={{
                    width: "25%",
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                    alignItems: "center"
                }}>


                </View>
                <View style={{
                    width: "75%",

                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20
                }}>
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>Office address</Text>
                    <Text style={{fontSize:17}}>{text}</Text>
                </View>
            </View>

            <Text style={{
                color: "#151C23",
                fontSize: 18,
                fontWeight: "bold",

            }}
            >Select payment system</Text>

            <View style={{ flex: 1 }}>
                <CustomTopTabNavigator />
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        gap: 20
    },


});
