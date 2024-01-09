
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Success = require('../../assets/Success.png');

export default function ReviewSuccess({ navigation }) {


    return (
        <SafeAreaView style={styles.container}>
            <Image source={Success} />
            <Text style={{ color: "#141414", fontSize: 25, fontWeight: "bold", marginTop:10 }}>Successful!</Text>
            <Text style={{ color: "#808080", fontSize: 15, textAlign:"center",  marginTop:10  }}>Thank you for reviewing the product and the shopper</Text>


            <TouchableOpacity
                    style={styles.BrowseButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Home')}>     
                        <Text style={{ color: "#FFFFFF", fontWeight: "bold", }}>BROWSE HOME</Text>    
                </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center"
    },
    BrowseButton: {
        backgroundColor: "#53E559",
        alignItems: "center",
        justifyContent: "center",
        height:50,
        width:150,
        borderRadius: 15,
        marginTop: 20,
        borderRadius:70,
        marginTop:70
         
    }

});