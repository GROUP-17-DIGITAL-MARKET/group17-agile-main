import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Switch, Modal } from 'react-native';
const entryImage = require('../../assets/discountbannerimage.png');
import { EvilIcons, AntDesign, FontAwesome, Ionicons, } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../../config/firebase';
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { GREEN_COLORS } from '../utils/Mycolors';
const deliverylocationicons = require('../../assets/deliverylocationicons.png');
 


export default function ShopperNotAcceptingOrders({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const nav = useNavigation()

    const storeData = useSelector((state) => state.CartSlice);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


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


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileAndnotification} >
                <TouchableOpacity onPress={() => nav.navigate('ProfileScreen')} style={styles.nameAndpicture}>
                    <Image onPress={() => nav.navigate('ProfileScreen')} source={entryImage} style={styles.image} />
                    <View>
                        <Text onPress={() => nav.navigate('ProfileScreen')} style={styles.name}>Hi, {userInfo?.Name}</Text>
                        <Text onPress={() => nav.navigate('ProfileScreen')} style={{ color: "#808080" }}>Stay safe on the road</Text>
                    </View>

                </TouchableOpacity>

                <Ionicons name="notifications" size={28} color="black" style={styles.notificationIcon} onPress={() => nav.navigate('UserNotification')} />
            </View>


            <View style={{
                justifyContent: "space-around",
                height: 50,
                backgroundColor: isEnabled ? "#00FF00" : "#808080",
                borderRadius: 100

            }}>
                <Text style={{ color: "#ffffff", top: 15, left: 7 }}>{isEnabled ? 'Accepting orders' : 'Not accepting orders'}</Text>
                <Switch
                    trackColor={{ false: '#FFFFFF', true: '#FFFFFF' }}
                    thumbColor={isEnabled ? '#53E559' : '#808080'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ marginBottom: 5 }}
                />

            </View>


            <ScrollView showsVerticalScrollIndicator={false} style={{ gap: 20 }}>
                <TouchableOpacity style={{
                    height: 172,
                    borderRadius: 20,
                    borderBottomWidth: 2,
                    borderColor: "#D9D9D9",
                    gap: 20,
                    backgroundColor: isEnabled ? "#FFFFFF" : "#e3e3e3",


                }} onPress={() => setModalVisible(true)}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row", height: 35,
                        backgroundColor: "#D5697C",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        paddingHorizontal: 15
                    }}>
                        <Text style={{ color: "#FFFFFF" }}>Now</Text>
                        <Text style={{ color: "#FFFFFF" }}>60.00</Text>
                    </View>

                    <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 20 }}>
                        <Image source={deliverylocationicons} />
                        <View style={{ height: 60, justifyContent: "space-between" }}>
                            <Text>Agbogloshie Market</Text>
                            <Text>Number 12, Antelope Street</Text>
                        </View>
                    </View>
                    <View style={{
                        gap: 20,
                        flexDirection: "row",
                        height: 35,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopWidth: 1,
                        borderColor: "#D9D9D9",
                        paddingHorizontal: 15,

                    }}>
                        <Ionicons name="ios-pencil-sharp" size={24} color="black" />
                        <Text>No extra notes...</Text>
                    </View>

                </TouchableOpacity>




                <View style={{
                    height: 172,

                    borderRadius: 20,
                    borderBottomWidth: 2,
                    borderColor: "#D9D9D9",
                    gap: 20,
                    backgroundColor: isEnabled ? "#FFFFFF" : "#e3e3e3",

                }}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                        height: 35,
                        backgroundColor: "#51E74E",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        paddingHorizontal: 15
                    }}>
                        <Text style={{ color: "#FFFFFF" }}>Now</Text>
                        <Text style={{ color: "#FFFFFF" }}>60.00</Text>
                    </View>

                    <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 20 }}>
                        <Image source={deliverylocationicons} />
                        <View style={{ height: 60, justifyContent: "space-between" }}>
                            <Text>Agbogloshie Market</Text>
                            <Text>Number 12, Antelope Street</Text>
                        </View>
                    </View>
                    <View style={{
                        gap: 20,
                        flexDirection: "row",
                        height: 35,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopWidth: 1,
                        borderColor: "#D9D9D9",
                        paddingHorizontal: 15,

                    }}>
                        <Ionicons name="ios-pencil-sharp" size={24} color="black" />
                        <Text>No extra notes...</Text>
                    </View>

                </View>



                <View style={{
                    height: 172,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 20,
                    borderBottomWidth: 2,
                    borderColor: "#D9D9D9",
                    gap: 20,
                    backgroundColor: isEnabled ? "#FFFFFF" : "#e3e3e3",

                }}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row", height: 35,
                        backgroundColor: "#DFA436",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        paddingHorizontal: 15
                    }}>
                        <Text style={{ color: "#FFFFFF" }}>Now</Text>
                        <Text style={{ color: "#FFFFFF" }}>60.00</Text>
                    </View>

                    <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 20 }}>
                        <Image source={deliverylocationicons} />
                        <View style={{ height: 60, justifyContent: "space-between" }}>
                            <Text>Agbogloshie Market</Text>
                            <Text>Number 12, Antelope Street</Text>
                        </View>
                    </View>
                    <View style={{
                        gap: 20,
                        flexDirection: "row",
                        height: 35,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopWidth: 1,
                        borderColor: "#D9D9D9",
                        paddingHorizontal: 15,

                    }}>
                        <Ionicons name="ios-pencil-sharp" size={24} color="black" />
                        <Text>No extra notes...</Text>
                    </View>

                </View>




                <View style={{
                    height: 172,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 20,
                    borderBottomWidth: 2,
                    borderColor: "#D9D9D9",
                    gap: 20,
                    backgroundColor: isEnabled ? "#FFFFFF" : "#e3e3e3",

                }}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row", height: 35,
                        backgroundColor: "#E05BE0",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        paddingHorizontal: 15
                    }}>
                        <Text style={{ color: "#FFFFFF" }}>Now</Text>
                        <Text style={{ color: "#FFFFFF" }}>60.00</Text>
                    </View>

                    <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 20 }}>
                        <Image source={deliverylocationicons} />
                        <View style={{ height: 60, justifyContent: "space-between" }}>
                            <Text>Agbogloshie Market</Text>
                            <Text>Number 12, Antelope Street</Text>
                        </View>
                    </View>
                    <View style={{
                        gap: 20,
                        flexDirection: "row",
                        height: 35,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopWidth: 1,
                        borderColor: "#D9D9D9",
                        paddingHorizontal: 15,

                    }}>
                        <Ionicons name="ios-pencil-sharp" size={24} color="black" />
                        <Text>No extra notes...</Text>
                    </View>

                </View>


                <View style={{
                    height: 172,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 20,
                    borderBottomWidth: 2,
                    borderColor: "#D9D9D9",
                    gap: 20,
                    backgroundColor: isEnabled ? "#FFFFFF" : "#e3e3e3",

                }}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row", height: 35,
                        backgroundColor: "#D5697C",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        paddingHorizontal: 15
                    }}>
                        <Text style={{ color: "#FFFFFF" }}>Now</Text>
                        <Text style={{ color: "#FFFFFF" }}>60.00</Text>
                    </View>

                    <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 20 }}>
                        <Image source={deliverylocationicons} />
                        <View style={{ height: 60, justifyContent: "space-between" }}>
                            <Text>Agbogloshie Market</Text>
                            <Text>Number 12, Antelope Street</Text>
                        </View>
                    </View>
                    <View style={{
                        gap: 20,
                        flexDirection: "row",
                        height: 35,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopWidth: 1,
                        borderColor: "#D9D9D9",
                        paddingHorizontal: 15,

                    }}>
                        <Ionicons name="ios-pencil-sharp" size={24} color="black" />
                        <Text>No extra notes...</Text>
                    </View>

                </View>



            </ScrollView>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        {/* <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableOpacity>
                        </View> */}



                        <View style={{ height: 600, marginBottom: 20, borderRadius:5 }}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={storeData}
                                renderItem={({ item, index }) => (
                                    <View
                                        style={{
                                            height: responsiveHeight(8),
                                            flexDirection: "row",
                                            backgroundColor: "#FFFFFF",
                                            borderRadius: 0,
                                            borderWidth: 1,
                                            borderColor: "#e3e3e3",
                                            marginBottom: 5
                                        }}
                                    >
                                        <View
                                            style={{
                                                flex: 0.35,
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Image
                                                style={{ height: 80, width: 80, resizeMode: "contain" }}
                                                source={item.img}
                                            />
                                        </View>

                                        {/* Child 2 */}
                                        <View
                                            style={{
                                                flex: 0.7,
                                                paddingHorizontal: 10,
                                                justifyContent: "center",
                                                gap: 10,
                                            }}
                                        >
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color: "#151C23",
                                                        fontSize: 17,
                                                        fontWeight: "normal",
                                                    }}
                                                >
                                                    {item.name}
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 17,
                                                        fontWeight: "bold",
                                                        color: "#151C230",
                                                    }}
                                                >
                                                    {item.quantity * item.price}
                                                </Text>
                                            </View>

                                        </View>
                                    </View>
                                )}
                            />
                        </View>

                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                navigation.navigate('ShopperTracker');
                              }}>
                            <Text style={{color:"#fff", fontSize:20}}>Complete</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        gap: 20
    },
    centeredView: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal:5,
         
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 50,
        position: "relative",


    },
    name: {
        left: 5,
        fontWeight: "bold",
        fontSize: 20
    },
    nameAndpicture: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10

    },
    profileAndnotification: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    notificationIcon: {
        right: 20,
        color: "#53E559"
    },
    button: {
        borderRadius: 20,
        padding: 10,
        backgroundColor:GREEN_COLORS.GREEN,
        width:200,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center"
      },

});
