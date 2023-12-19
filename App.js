import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign, Ionicons,  FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EntryScreen from './src/screens/entry-screen';
import SignupScreen from './src/screens/Signup-screen';
import SigninScreen from './src/screens/signin-screen';
import HomeScreen from './src/screens/home-screen';
import Splash from './src/screens/Splash-screen';
import Details from './src/screens/details';
import ChangePassword from './src/screens/ChangePassword';
import ProfileScreen from './src/screens/ProfileScreen';
import Category from './src/screens/category';
import FruitsAndVegetables from './src/screens/FruitsAndVegetables';
import Spices from './src/screens/Spices';
import Cereals from './src/screens/Cereals';
import Markets from './src/screens/Markets';
import Cart from './src/screens/Cart';
import OderPlaced from './src/screens/Order-placed';
import Checkout from './src/screens/CheckOut';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';
import TrackOrder from './src/screens/Track_order_Screen';
import UserNotification from './src/screens/User_Notification';
import DeliveryNotification from './src/components/Notifications/Delivery';
import NewsUpdatesNotification from './src/components/Notifications/News Updates';
import Myorders from './src/screens/My_Orders';
import Ordersdetails from './src/screens/Ordersdetails';


// Vendor

import ShopperEntryScreen from './src/screens/Shopper_EntryScreen';
import ShopperSigninScreen from './src/screens/Shopper_Signin';
import ShopperSignupScreen from './src/screens/Shopper_Signup';
import ShopperProfileScreen from './src/screens/Shopper_profile';
import ShopperNotAcceptingOrders from './src/screens/Shopper_not_accepting_orders';
import ShopperEarnings from './src/screens/Shopper_earnings';
import ShopperHistory from './src/screens/Shopper_history';
import ShopperTracker from './src/screens/Shopper_Tracker';
import ChatScreen from './src/screens/ChatScreen';
 







const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='ShopperEntryScreen'
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Entry" component={EntryScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="ProfileScreen" component={BottomTabs} />
          <Stack.Screen name="HomeScreen" component={BottomTabs} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Changepassword" component={ChangePassword} />
          <Stack.Screen name="Category" component={BottomTabs} options={{ headerShown: true }} />
          <Stack.Screen name="FruitsAndVegetables" component={FruitsAndVegetables} options={{ headerShown: true }} />
          <Stack.Screen name="Spices" component={Spices} options={{ headerShown: true }} />
          <Stack.Screen name="Cereals" component={Cereals} options={{ headerShown: true }} />
          <Stack.Screen name="Markets" component={Markets} options={{ headerShown: true }} />
          <Stack.Screen name="Cart" component={BottomTabs} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="OderPlaced" component={OderPlaced} />
          <Stack.Screen name="TrackOrder" component={TrackOrder} />
          <Stack.Screen name="UserNotification" component={UserNotification} />
          <Stack.Screen name="DeliveryNotification" component={DeliveryNotification} />
          <Stack.Screen name="NewsUpdatesNotification" component={NewsUpdatesNotification} />
          <Stack.Screen name="Myorders" component={Myorders} />
          <Stack.Screen name="Ordersdetails" component={Ordersdetails} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />


          {/* VENDOR */}
          <Stack.Screen name="ShopperEntryScreen" component={ShopperEntryScreen} />
          <Stack.Screen name="ShopperSigninScreen" component={ShopperSigninScreen} />
          <Stack.Screen name="ShopperSignupScreen" component={ShopperSignupScreen} />
          <Stack.Screen name="ShopperProfileScreen" component={ShopperBottomTabs} />
          <Stack.Screen name="ShopperTracker" component={ShopperTracker} />
         
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>

  );
}





const BottomTabs = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity>
              <Entypo
                name="home"
                size={26} color="black"
                onPress={() => navigation.navigate('Home')}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen name="CategoryScreen" component={Category}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: () => (
            <Ionicons name="newspaper-outline" size={26} color="black" />
          ),
        }}
      />

      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity >
              <Ionicons
                name="md-person-circle-outline"
                size={26} color="black"
                onPress={() => navigation.navigate('ProfileScreen')}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen name="CartPage" component={Cart}
        options={{
          tabBarLabel: 'Cart',
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="shopping-cart" size={26} color="black" />
          ),
        }}
      />

    </Tab.Navigator>
  );
}















const ShopperBottomTabs = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ShopperNotAcceptingOrders" component={ShopperNotAcceptingOrders}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity>
              <Feather name="package" size={26} color="black"
                onPress={() => navigation.navigate('ShopperNotAcceptingOrders')}
              />
            </TouchableOpacity>
          ),
        }}
      />  

      <Tab.Screen name="ShopperEarnings" component={ShopperEarnings}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="money" size={26} color="black"
              onPress={() => navigation.navigate('ShopperEarnings')}
            />
          ),
        }}
      />

      <Tab.Screen name="ShopperHistory" component={ShopperHistory}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity >

              <MaterialIcons name="menu-book" size={26} color="black"
                onPress={() => navigation.navigate('ShopperHistory')}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen name="ShopperProfileScreentab" component={ShopperProfileScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="person-circle-outline" size={24} color="#999999"
            onPress={() => navigation.navigate('ShopperProfileScreentab')} 
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
}




