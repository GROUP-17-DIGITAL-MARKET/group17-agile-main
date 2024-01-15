import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

import { BLACK_COLORS, GRAY_COLORS, GREEN_COLORS, WHITE_COLORS, } from "../utils/Mycolors";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth, db } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import PhoneNumberInput from "react-native-phone-number-input";


export default function ShopperSignupScreen({ navigation }) {
  const [isVisible, setisVisible] = useState(true);
  const nav = useNavigation()
  const phoneInputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);



  const handleSignup = async () => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email.trim(), password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(false);
        setDoc(doc(db, "Shoppers", user.uid), {
          Name: username,
          Email: email,
          PhoneNumber: phoneNumber,
          CreatedAt: new Date().toUTCString(),
        });
        nav.replace('ShopperSigninScreen')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="#53E559" />

      <View style={styles.backiconview}>
        <AntDesign
          onPress={() => navigation.goBack()}
          name="arrowleft"
          size={30}
          color="black"
          style={{
            color: GREEN_COLORS.GREEN,
            zIndex: 2,
            marginTop: 20,
            position: "absolute",
            marginLeft: 10,
          }}
        />
      </View>

      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <Text
          style={{
            marginTop: 50,
            fontWeight: "bold",
            color: GREEN_COLORS.GREEN,
            fontSize: 25,
          }}
        >
          Sign Up
        </Text>
      </View>

      <View style={styles.inputcontainer}>
        <KeyboardAvoidingView style={styles.inputView}>
          <Ionicons
            name="person"
            size={30}
            color="black"
            style={{
              color: GRAY_COLORS.MEDIUM_GRAY,
              marginTop: 0,
              marginLeft: 5,
              position: "absolute",
              zIndex: 2,
            }}
          />
          <TextInput
            placeholder="Username"
            style={styles.textInput}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </KeyboardAvoidingView>

        <KeyboardAvoidingView style={styles.inputView}>
          <Ionicons
            name="mail"
            size={30}
            color="black"
            style={{
              color: GRAY_COLORS.MEDIUM_GRAY,
              marginTop: 0,
              marginLeft: 5,
              position: "absolute",
              zIndex: 2,
            }}
          />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.textInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </KeyboardAvoidingView>

        <View style={styles.inputView}>
          <PhoneNumberInput
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            ref={phoneInputRef}
            defaultCode="GH"
            layout="first"
            withDarkTheme
            containerStyle={{
              backgroundColor: GRAY_COLORS.LIGHT_GRAY,
              height: 50,
              width: 350,
              borderRadius: 40,



            }}
            textInputProps={{
              selectionColor: BLACK_COLORS.BLACK,

            }}
            textContainerStyle={{
              backgroundColor: "transparent",
              borderLeftColor: WHITE_COLORS.WHITE,
              borderLeftWidth: 1,
            }}
            textInputStyle={{
              color: BLACK_COLORS.BLACK,

            }}
            codeTextStyle={{
              color: BLACK_COLORS.BLACK,
            }}

          />
        </View>

        <KeyboardAvoidingView style={styles.inputView}>
          <FontAwesome
            name="lock"
            size={30}
            color="black"
            style={{
              color: GRAY_COLORS.MEDIUM_GRAY,
              marginTop: 0,
              marginLeft: 5,
              position: "absolute",
              zIndex: 2,
            }}
          />
          <TextInput
            secureTextEntry={isVisible}
            maxLength={8}
            placeholder="Password"
            style={styles.textInput}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Ionicons
            name={isVisible == true ? "eye-off-outline" : "eye-outline"}
            onPress={() => {
              setisVisible(!isVisible);
            }}
            size={30}
            color="black"
            style={{
              color: GRAY_COLORS.MEDIUM_GRAY,
              marginTop: 0,
              marginLeft: 310,
              position: "absolute",
              zIndex: 2,
            }}
          />
        </KeyboardAvoidingView>
      </View>

      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          marginHorizontal: 20,
          marginVertical: 30,
        }}
      >
        <TouchableOpacity style={styles.signupButtontext} onPress={handleSignup}>
          <Text style={{ fontSize: 18, fontWeight: 600, color: WHITE_COLORS.WHITE }}>
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View style={styles.curve}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLORS.WHITE,
    paddingTop: 40,
  },

  inputView: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    width: 350,
    backgroundColor: GRAY_COLORS.LIGHT_GRAY,
    borderRadius: 40,
    paddingHorizontal: 40,
  },

  inputcontainer: {
    marginTop: 50,
    alignItems: "center",
  },

  signupButtontext: {
    backgroundColor: GREEN_COLORS.GREEN,
    height: 60,
    width: 200,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  curve: {
    flex: 0.7,
    backgroundColor: GREEN_COLORS.GREEN,
    borderTopLeftRadius: 190,
    borderTopRightRadius: 190,
  },
});
