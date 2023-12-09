
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView, TextInput, SafeAreaView, Alert, Modal, } from 'react-native';
import { EvilIcons, AntDesign, FontAwesome, Ionicons, } from '@expo/vector-icons';
import { myColors } from '../utils/Mycolors';
import { KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { authentication, database } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import uuid from 'react-native-uuid';
import { TouchableOpacity } from 'react-native-gesture-handler';
 

export default function SignupScreen({ navigation }) {
    const [isVisible, setisVisible] = useState(true);
    const [userCredencials, setuserCredencials] = useState(
        {
            email: "",
            password: "",
            name: ""
        }
    );

    const { email, password, name } = userCredencials;
 

    const uid = uuid.v4()
    const userAccount = () => {
        createUserWithEmailAndPassword(authentication, email, password)
            .then(() => {
                navigation.navigate('Signin')
                setDoc(doc(database, 'users', uid), {
                    username: name,
                    email: email,
                    id: authentication.currentUser.uid
                });
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
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='#53E559' />
            
                <View style={styles.backiconview}>
                    <AntDesign  onPress={() => navigation.goBack()} name="arrowleft" size={30} color="black" style={{
                        color: myColors.primary,
                        zIndex: 2, 
                        marginTop: 20,
                        position: 'absolute',
                        marginLeft: 10
                    }} />
                </View>

                <View style={{ justifyContent: "center", flexDirection: "row" }}>
                    <Text style={{ marginTop: 50, fontWeight: "bold", color: myColors.primary, fontSize: 25 }}>Sign Up</Text>
                </View>



                <View style={styles.inputcontainer}>

                    <KeyboardAvoidingView style={styles.inputView}>
                        <Ionicons name="person" size={30} color="black" style={{ color: myColors.fifth, marginTop: 0, marginLeft: 5, position: "absolute", zIndex: 2 }} />
                        <TextInput placeholder='Username'
                            style={styles.textInput}
                            value={name}
                            onChangeText={(value) => {
                                setuserCredencials({ ...userCredencials, name: value })
                            }}
                        />
                    </KeyboardAvoidingView>

                    <KeyboardAvoidingView style={styles.inputView}>
                        <Ionicons name="mail" size={30} color="black" style={{ color: myColors.fifth, marginTop: 0, marginLeft: 5, position: "absolute", zIndex: 2 }} />
                        <TextInput placeholder='Email'
                            keyboardType='email-address'
                            style={styles.textInput}

                            value={email}
                            onChangeText={(value) => {
                                setuserCredencials({ ...userCredencials, email: value })
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
                                setuserCredencials({ ...userCredencials, password: value })
                            }}
                        />
                        <Ionicons name={isVisible == true ? "eye-off-outline" : "eye-outline"}
                            onPress={() => {
                                setisVisible(!isVisible)
                            }}
                            size={30} color="black" style={{ color: myColors.fifth, marginTop: 0, marginLeft: 310, position: "absolute", zIndex: 2 }} />

                    </KeyboardAvoidingView>

                </View>

                <View style={{ justifyContent: "flex-end", alignItems: "center", marginHorizontal: 20,  marginVertical:30 }}>
                    <TouchableOpacity style={styles.signupButtontext} onPress={userAccount} >
                        <Text style={{ fontSize: 18, fontWeight: 600, color: "#fff" }}>
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View >

                <View style={{flex:1, justifyContent:"flex-end"}}>
                <View style={styles.curve}>
                </View>
                </View>

                

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:40

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
        height: 60,
        width: 200,
        borderRadius: 40,
        justifyContent: "center", alignItems: "center"
    },
    curve: { 
        flex:0.7,   
        backgroundColor: myColors.primary,
        borderTopLeftRadius: 190,
        borderTopRightRadius: 190
    }

});


