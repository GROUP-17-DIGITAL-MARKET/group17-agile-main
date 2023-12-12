import React, { useEffect,useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MobileMoney from './MobileMoney';
import Cardpayment from './CardPayment';
 

const Tab = createMaterialTopTabNavigator();

export default function CustomTopTabNavigator() {
 
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          marginTop: 100,
          
        },
        tabBarStyle: { backgroundColor: '#fff' },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight:"bold",
          color: "#000",
          backgroundColor:"#B7FFBA",
          width:120,   
          borderRadius:10,
          paddingVertical:15
        },

      }}
    >
      <Tab.Screen name="Tab1" component={MobileMoney} options={{ tabBarLabel: 'MoMo' }} />
      <Tab.Screen name="Tab2"  component={Cardpayment} options={{ tabBarLabel: 'Card' }} />
      <Tab.Screen name="Tab3" component={MobileMoney} options={{ tabBarLabel: 'Cash' }} />
    </Tab.Navigator>
  );
};
