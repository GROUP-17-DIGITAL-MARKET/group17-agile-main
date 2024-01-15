import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  Platform
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { AntDesign, Entypo, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
const Shopper = require("../../../../assets/shopperimage.png");
import { collection, getDocs } from "firebase/firestore";
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from "../../../../config/firebase";
import * as Location from 'expo-location';

export default function TrackOrder({ navigation }) {
  const [userInfo, setUserInfo] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const accraRegion = {
    latitude: 5.6037,
    longitude: -0.187,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const refRBSheet = useRef();

  const makePhoneCall = () => {
    if (Platform.OS === "android") {
      Linking.openURL(`tel:${userInfo.PhoneNumber}`);
    } else {
      Linking.openURL(`telprompt:${userInfo.PhoneNumber}`);
    }
  }

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

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => refRBSheet.current.open()}
        >
          <SimpleLineIcons name="menu" size={24} color="black" />
        </TouchableOpacity>

        <MapView style={styles.map} initialRegion={accraRegion}>
          <Marker coordinate={accraRegion} title="Accra, Ghana" />
        </MapView>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <View style={{ gap: 15, }}>
          <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 5 }}>
            <AntDesign
              name="clockcircle"
              size={24}
              color="#fff"
              style={{
                padding: 20,
                backgroundColor: "#D5697C",
                borderRadius: 5,
              }}
            />
            <View>
              <Text style={{ color: "#808080" }}>Delivery Time</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>1hr</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 5 }}>
            <AntDesign
              name="clockcircle"
              size={24}
              color="#fff"
              style={{
                padding: 20,
                backgroundColor: "#DE5FDE",
                borderRadius: 5,
              }}
            />
            <View>
              <Text style={{ color: "#808080" }}>Location</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {text}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 5,

            }}
          >
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Image source={Shopper} style={styles.shopperimage} />

              <View>
                <Text style={{ color: "#808080" }}>Your Shopper</Text>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {userInfo?.Name}
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", gap: 20 }}>
              <Entypo
                onPress={() => makePhoneCall()}
                name="phone"
                size={24}
                color="#fff"
                style={{
                  padding: 10,
                  backgroundColor: "#53E559",
                  borderRadius: 10,
                }}
              />
              <MaterialIcons
                name="message"
                size={24}
                color="#fff"
                style={{
                  padding: 10,
                  backgroundColor: "#DFA436",
                  borderRadius: 10,
                }}
                onPress={() => navigation.navigate('ChatScreen')}
              />
            </View>
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  button: {
    position: "absolute",
    zIndex: 2,
    marginTop: 30,
    width: 50,
    backgroundColor: "#fff",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    borderRadius: 5,
  },
  shopperimage: {
    width: 50,
    height: 50,
    borderRadius: 500,
  },
});
