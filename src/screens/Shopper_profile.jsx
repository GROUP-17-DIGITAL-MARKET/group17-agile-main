import React, { useEffect, useState } from 'react';
import {View,  StyleSheet, Alert, ImageBackground} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { getDoc, doc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons,Ionicons, MaterialCommunityIcons, Fontisto , FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useToast } from "react-native-toast-notifications";
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth, db } from '../../config/firebase';
import { collection, getDocs } from "firebase/firestore";
import { StatusBar } from 'expo-status-bar';

const background = require('../../assets/profilebackground.png');


const ShopperProfileScreen = ({navigation}) => {
  const [userInfo, setUserInfo] = useState(null);
  const toast = useToast();
  const nav = useNavigation()

  const getData = async () => {
    const docRef = doc(db, "Shoppers", "e9LBlNmAyieC3Ne5flLFpzCuuLd2");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUserInfo(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };
  const getUserData = async () => {
    const querySnapshot = await getDocs(collection(db, "Shoppers"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserInfo(doc.data())
    });
  };


  useEffect(() => {
    // getData();
    getUserData();
  }, []);


  const handleSignout = async () => {
    await auth.signOut();
    toast.show("Logout Successful!", {
      type: "success",
      placement: "top",
      duration: 3000,
      offset: 30,
      animationType: "slide-in",
    });
    nav.replace('UserShopperEntry')
  };
  const Modal = () => {
    Alert.alert("Grocery Hub", "Do you really want to logout", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      { text: "Logout", onPress: handleSignout },
    ]);

  };

  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='#000'/>
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
            }]}>{userInfo?.Name}</Title>
            <Caption style={styles.caption}>{userInfo?.Email}</Caption>
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
          <Text style={{color:"#777777", marginLeft: 20}}>{userInfo?.Email}</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={styles.infoBox } >
            <MaterialCommunityIcons name="truck-fast-outline" size={24} color="black" onPress={() => navigation.navigate('ShopperNotAcceptingOrders')} />
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
         
        <TouchableRipple onPress={Modal}>
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

export default ShopperProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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