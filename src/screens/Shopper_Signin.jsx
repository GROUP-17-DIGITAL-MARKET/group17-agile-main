
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView, TextInput, SafeAreaView, Alert, Modal, } from 'react-native';
import { EvilIcons, AntDesign, FontAwesome, Ionicons, } from '@expo/vector-icons';
import { myColors } from '../utils/Mycolors';
import { KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { authentication } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';




export default function ShopperSigninScreen({ navigation }) {
    const nav = useNavigation()
    const [isVisible, setisVisible] = useState(false);
    const [loginCredencials, setloginCredencials] = useState(
        {
            email: "",
            password: ""
        }
    );

    const { email, password } = loginCredencials;


    const loginUser = () => {

        signInWithEmailAndPassword(authentication, email, password)
            .then((val) => {
                Alert.alert("Login Successful!")
                nav.replace('ShopperProfileScreen')
            }).catch((err) => {
                Alert.alert(err.message)
            })
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='white' />

            <View style={styles.curve}>
                <AntDesign onPress={() => navigation.navigate('Entry')} name="arrowleft" size={30} color="black" style={{ color: myColors.secondary, marginLeft: 10, marginTop: 20 }} />
            </View>

            <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <Text style={{ marginTop: 50, fontWeight: "bold", color: myColors.primary, fontSize: 25 }}>Sign in</Text>
            </View>


            <View style={styles.inputcontainer}>

                <KeyboardAvoidingView style={styles.inputView}>
                    <Ionicons name="mail" size={30} color="black" style={{ color: myColors.fifth, marginTop: 0, marginLeft: 5, position: "absolute", zIndex: 2 }} />
                    <TextInput placeholder='Email'
                        keyboardType='email-address'
                        style={styles.textInput}

                        value={email}
                        onChangeText={(value) => {
                            setloginCredencials({ ...loginCredencials, email: value })
                        }}
                    />
                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={styles.inputView}>
                    <FontAwesome name="lock" size={30} color="black" style={{ color: myColors.fifth, marginTop: 0, marginLeft: 5, position: "absolute", zIndex: 2 }} />
                    <TextInput
                        secureTextEntry={isVisible}
                        maxLength={8}
                        placeholder='Password'
                        style={styles.textInput}
                        value={password}
                        onChangeText={(value) => {
                            setloginCredencials({ ...loginCredencials, password: value })
                        }}
                    />
                    <Ionicons name={isVisible == true ? "eye-off-outline" : "eye-outline"}
                        onPress={() => {
                            setisVisible(!isVisible)
                        }}
                        size={30} color="black" style={{ color: myColors.fifth, marginTop: 0, marginLeft: 310, position: "absolute", zIndex: 2 }} />

                </KeyboardAvoidingView>


            </View>




            <View style={{ flexDirection: "row", justifyContent: "flex-end", fontSize: 18, marginRight: 20 }}>
                <Text
                    onPress={() => nav.navigate('Changepassword')}
                    style={{

                        color: myColors.primary,
                        fontSize: 16,
                        marginVertical: 15,
                    }}>
                    Forgot?
                </Text>
            </View>

            <View style={{ height: 70, top: 5, marginHorizontal: 20 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.signupButtontext} onPress={loginUser} >
                    <Text style={{ fontSize: 20, fontWeight: 600, color: "#fff" }}>
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 40

    },

    inputView: {
        flexDirection: "row",
        marginTop: 20,

        alignItems: "center",

    },
    textInput: {
        height: 50,
        width: 350,
        backgroundColor: myColors.fourth,
        borderRadius: 40,
        paddingHorizontal: 40

    },

    inputcontainer: {
        marginTop: 50,
        alignItems: "center"

    },
    signupButtontext: {
        backgroundColor: myColors.primary,
        height: 70,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },



    curve: {
        height: 265,
        backgroundColor: myColors.primary,
        borderBottomLeftRadius: 190,
        borderBottomRightRadius: 190
    }

});


