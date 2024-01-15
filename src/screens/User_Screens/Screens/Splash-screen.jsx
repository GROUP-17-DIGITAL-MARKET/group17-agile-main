import React, { useEffect } from 'react';
import { View, Text, Image, Animated, Easing } from 'react-native';
import { BLACK_COLORS, GREEN_COLORS, } from '../../../utils/Mycolors';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const splashimage = require('../../../../assets/splashImage.jpg');

export default function Splash() {
  const nav = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      nav.replace('UserShopperEntry');
    }, 5000);
  }, []);

  const rotateValue = new Animated.Value(0);

  // Set up animation configuration
  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // Start the rotation animation
  Animated.loop(
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const renderCircularText = () => {
    const text = 'Welcome to Grocery Hub ';
    const radius = 100; // Adjust the radius as needed
    const angleIncrement = (2 * Math.PI) / text.length;

    return text.split('').map((char, index) => {
      const angle = index * angleIncrement;
      const { translateX, translateY } = circleTextPosition(radius, angle);
      return (
        <Animated.Text
          key={index}
          style={{
            position: 'absolute',
            transform: [
              { translateX },
              { translateY },
              { rotate },
            ],
            color: BLACK_COLORS.BLACK,
            fontSize: 30,
          }}
        >
          {char}
        </Animated.Text>
      );
    });
  };

  const circleTextPosition = (radius, angle) => {
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { translateX: x, translateY: y };
  };

  return (
    <View style={{ backgroundColor:GREEN_COLORS.GREEN, flex: 1, justifyContent: "center" }}>
      <StatusBar style='light' />
      
      <View style={{ justifyContent: "center", alignItems: "center", position: 'relative' }}>
        {renderCircularText()}
        <Image source={splashimage} style={{ borderRadius: 95, position: 'absolute' }} />
      </View>
    </View>
  );
}
