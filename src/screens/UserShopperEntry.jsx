import React, { useEffect } from 'react'

import { myColors } from '../utils/Mycolors';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView, TextInput, SafeAreaView, Alert, Modal, } from 'react-native';

export default function UserShopperEntry({ navigation }) {
  const nav = useNavigation()

  return (
    <View style={{ backgroundColor: "#FFFFFF", flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar style='light' />
      <MaterialIcons name="local-grocery-store" size={100} color="#53E559" />
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#53E559", fontStyle: "italic" }}>Grocery Hub</Text>
      <View style={{ justifyContent: "flex-end", alignItems: "center", marginHorizontal: 20, marginVertical: 30 }}>
        <TouchableOpacity style={styles.signupButtontext} onPress={() => navigation.navigate('Entry')}>
          <Text style={{ fontSize: 18, fontWeight: 600, color: "#53E559" }}>
            Continue as a user
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButtontext} onPress={() => navigation.navigate('ShopperEntryScreen')}>
          <Text style={{ fontSize: 18, fontWeight: 600, color: "#53E559" }}>
            Continue as a shopper
          </Text>
        </TouchableOpacity>
      </View >
    </View>
  );
}



const styles = StyleSheet.create({

  signupButtontext: {
    height: 50,
    width: 300,
    borderRadius: 40,
    justifyContent: "center", 
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#53E559",
    marginVertical: 10
  },
});
