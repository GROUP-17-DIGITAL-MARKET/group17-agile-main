import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign, Ionicons, MaterialCommunityIcons, Zocial, FontAwesome } from '@expo/vector-icons';
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
 




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='HomeScreen'
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



