import React, { useEffect, useState } from 'react';
import {View,StyleSheet, Alert, ImageBackground, Image} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons,Ionicons, MaterialCommunityIcons, Fontisto , FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import uuid from 'react-native-uuid';
const background = require('../../assets/profilebackground.png');
const Profileimage = require('../../assets/userImage.png');
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc, getFirestore } from 'firebase/firestore';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useToast } from "react-native-toast-notifications";

const authentication = getAuth();
const database = getFirestore();

const ProfileScreen = ({navigation}) => {
  const toast = useToast();

  const  nav=useNavigation()
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


  const [userData, setUserData] = useState({
    username: '',
    email: '',
  });

  
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


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (user) => {
      if (user) {
        const userId = user.uid;
        const userDocRef = doc(database, 'users', userId);

        getDoc(userDocRef)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              const userDataFromFirestore = docSnapshot.data();
              setUserData({
                username: userDataFromFirestore.username,
                email: user.email,
              });
            }
          })
          .catch((error) => {
            console.error('Error fetching user data:', error);
          });
      }
    });

    return () => unsubscribe();
  }, []);


  const handleLogout = () => {
    signOut(authentication)
      .then(() => {
        toast.show("Logout Successful!", {
          type: "success",
          placement: "top",
          duration: 3000,
          offset: 30,
          animationType: "slide-in",
        });
        nav.replace('UserShopperEntry')
       
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground  source={background} style={styles.background} >

      <View style={styles.userInfoSection}>

     
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Image 
            source={Profileimage}
            style={{width:70, height:70, borderRadius:99}}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{userData.username}</Title>
            <Caption style={styles.caption}>{userData.email}</Caption>
          </View>
        </View>
       
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{text}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>0209525480</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>sela@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={styles.infoBox } >
            <MaterialCommunityIcons name="truck-fast-outline" size={24} color="black" onPress={() => navigation.navigate('Myorders')} />
            <Caption>All Orders</Caption>
          </View>
          <View style={styles.infoBox}>
            <Fontisto name="shopping-package" size={24} color="black" />
            <Caption>Vouchers</Caption>
          </View>
          <View style={styles.infoBox}>
            <FontAwesome5 name="address-book" size={24} color="black" />
            <Caption>Address</Caption>
          </View>
          
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialIcons name="notifications-active" size={25} color="#141414" />
            <Text style={styles.menuItemText}>Notifications</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>    
            <MaterialIcons name="payment" size={25} color="#141414" />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
         
        
        <TouchableRipple onPress={() => navigation.navigate('Changepassword')}>
          <View style={styles.menuItem}>
          <FontAwesome5 name="exchange-alt" size={25} color="#141414" />
            <Text style={styles.menuItemText}>Change Password</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('Myorders')}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="truck-fast-outline" size={25} color="#141414" />
            <Text style={styles.menuItemText}>My Orders</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={handleLogout}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#141414" size={25}/>
            <Text style={styles.menuItemText}>Log Out</Text>
          </View>
        </TouchableRipple>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
    width:350,
    backgroundColor:"#fff",
    alignSelf:"center",
    borderRadius:20

  },
  infoBox: {
     width: '33.3%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
    alignItems:"center"
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width:370,
    backgroundColor:"#fff",
    marginVertical:5
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});