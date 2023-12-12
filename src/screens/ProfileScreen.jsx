import React, { useEffect, useState } from 'react';
import {View, SafeAreaView, StyleSheet, Alert, ImageBackground} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { authentication, database } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons,Ionicons, MaterialCommunityIcons, Fontisto , FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { doc, getDoc } from 'firebase/firestore';
import uuid from 'react-native-uuid';

const background = require('../../assets/profilebackground.png');


const ProfileScreen = ({navigation}) => {
  const  nav=useNavigation()
  const uid = uuid.v4()
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   // Function to fetch user data from Firestore
  //   const fetchUserData = async () => {
  //     try {
  //       const userDocRef = doc(database, 'users', uid);
  //       const userDocSnapshot = await getDoc(userDocRef);

      
  //       if (userDocSnapshot.exists()) {
  //         const userData = userDocSnapshot.data();
  //         setUserData(userData);
  //       } else {
  //         Alert.alert("User data not found.");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //       Alert.alert("Error fetching user data.");
  //     }
  //   };

  //   // Call the function to fetch user data when the component mounts
  //   fetchUserData();
  // }, []);


  const handleLogout = () => {
    signOut(authentication)
      .then(() => {
        Alert.alert("Logout Successful!");
        nav.replace('Signin')
       
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
          <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Selasi</Title>
            <Caption style={styles.caption}>Selasi@gmail.com</Caption>
          </View>
        </View>
       
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Accra Ghana</Text>
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
          <View style={styles.infoBox }>
            <MaterialCommunityIcons name="truck-fast-outline" size={24} color="black" />
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
         
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="settings-sharp" size={25} color="#141414" />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('Changepassword')}>
          <View style={styles.menuItem}>
            <Ionicons name="settings-sharp" size={25} color="#141414" />
            <Text style={styles.menuItemText}>Change Password</Text>
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
    marginTop:40
  },
  background: {
    flex: 1,
    // justifyContent: 'center',
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