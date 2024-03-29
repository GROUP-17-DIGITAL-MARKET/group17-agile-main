
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView, TextInput, Alert, Modal, } from 'react-native';
import { EvilIcons, AntDesign, FontAwesome, Ionicons, } from '@expo/vector-icons';
import { GRAY_COLORS, GREEN_COLORS, WHITE_COLORS, myColors } from '../utils/Mycolors';
import { KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications";
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth, db } from '../../config/firebase';

export default function ShopperSigninScreen({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const toast = useToast();
    const nav = useNavigation()
    const [isVisible, setisVisible] = useState(false);


    const handleSignin = async () => {
        setLoading(true);
        await
            signInWithEmailAndPassword(auth, email.trim(), password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setLoading(false);
                    toast.show("Login Successful!", {
                        type: "success",
                        placement: "top",
                        duration: 3000,
                        offset: 30,
                        animationType: "slide-in",
                    });
                    nav.replace('ShopperNotAcceptingOrder')
                })
                .catch((err) => {
                    alert(err.meassage);
                });
    };




    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <StatusBar style='#fff' backgroundColor='#53E559' />

                    <View style={styles.curve}>
                        <AntDesign onPress={() => navigation.navigate('ShopperEntryScreen')} name="arrowleft" size={30} color="black" style={{ color: myColors.secondary, marginLeft: 10, marginTop: 20 }} />
                    </View>

                    <View style={{ justifyContent: "center", flexDirection: "row" }}>
                        <Text style={{ marginTop: 50, fontWeight: "bold", color: GREEN_COLORS.GREEN, fontSize: 25 }}>Sign in</Text>
                    </View>


                    <View style={styles.inputcontainer}>

                        <KeyboardAvoidingView style={styles.inputView}>
                            <Ionicons name="mail" size={30} color="black" style={{ color: GRAY_COLORS.MEDIUM_GRAY, marginTop: 0, marginLeft: 5, position: "absolute", zIndex: 2 }} />
                            <TextInput placeholder='Email'
                                keyboardType='email-address'
                                style={styles.textInput}
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                        </KeyboardAvoidingView>

                        <KeyboardAvoidingView style={styles.inputView}>
                            <FontAwesome name="lock" size={30} color="black" style={{ color: GRAY_COLORS.MEDIUM_GRAY, marginTop: 0, marginLeft: 5, position: "absolute", zIndex: 2 }} />
                            <TextInput
                                secureTextEntry={isVisible}
                                maxLength={8}
                                placeholder='Password'
                                style={styles.textInput}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <Ionicons name={isVisible == true ? "eye-off-outline" : "eye-outline"}
                                onPress={() => {
                                    setisVisible(!isVisible)
                                }}
                                size={30} color="black" style={{ color: GRAY_COLORS.MEDIUM_GRAY, marginTop: 0, marginLeft: 310, position: "absolute", zIndex: 2 }} />

                        </KeyboardAvoidingView>


                    </View>




                    <View style={{ flexDirection: "row", justifyContent: "flex-end", fontSize: 18, marginRight: 20 }}>
                        <Text
                            onPress={() => nav.navigate('Changepassword')}
                            style={{

                                color: GREEN_COLORS.GREEN,
                                fontSize: 16,
                                marginVertical: 15,
                            }}>
                            Forgot?
                        </Text>
                    </View>

                    <View style={{ height: 70, top: 5, marginHorizontal: 20 }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.signupButtontext} onPress={handleSignin} >
                            <Text style={{ fontSize: 20, fontWeight: 600, color: WHITE_COLORS.WHITE }}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',


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
        backgroundColor: GREEN_COLORS.GREEN,
        height: 70,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },



    curve: {
        height: 265,
        backgroundColor: GREEN_COLORS.GREEN,
        borderBottomLeftRadius: 190,
        borderBottomRightRadius: 190
    }

});


