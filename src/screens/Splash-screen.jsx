import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native';
import { myColors } from '../utils/Mycolors';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
const splashimage = require('../../assets/splashImage.jpg');

export default function Splash() {
  const nav = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      nav.replace('Entry')
    }, 5000);
  }, []);
  return (
    <View style={{ backgroundColor: myColors.primary, flex: 1, justifyContent: "center" }}>
      <StatusBar style='light' />
      <View style={{ height: 200, justifyContent: "center", alignItems: "center" }}>
        <Image source={splashimage} style={{ borderRadius: 95 }} />
      </View>
    </View>
  );
}



