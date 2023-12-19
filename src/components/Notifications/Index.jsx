import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DeliveryNotification from './Delivery';
import NewsUpdatesNotification from './News Updates';



const Tab = createMaterialTopTabNavigator();

export default function CustomNotificationTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          marginTop: 100,
          
        },
        // tabBarStyle: { backgroundColor: '#32324D' },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight:"bold",
          color: "#fff",
          backgroundColor:"#53E559",
          paddingHorizontal:15,
          paddingVertical:15,
          borderRadius:16,
        },

      }}
    >
      <Tab.Screen name="Tab1" component={DeliveryNotification} options={{ tabBarLabel: 'Delivery' }} />
      <Tab.Screen name="Tab2" component={NewsUpdatesNotification} options={{ tabBarLabel: 'News Updates' }} />
    </Tab.Navigator>
  );
};
