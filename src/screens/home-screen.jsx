import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView, TextInput, } from 'react-native';
import { EvilIcons, AntDesign, FontAwesome, Ionicons, } from '@expo/vector-icons';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { myColors } from '../utils/Mycolors';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc, getFirestore } from 'firebase/firestore';
const entryImage = require('../../assets/discountbannerimage.png');
const homemarketimage = require('../../assets/dome.png');
import HomeRecommendedcarousel from './Home-recomended-carousel';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeCategorycarousel from './Home-category-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
const authentication = getAuth();
const database = getFirestore();

export default function HomeScreen({ navigation }) {
    const nav = useNavigation()
    const [username, setUsername] = useState('');


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authentication, (user) => {
            if (user) {
                const userId = user.uid;
                const userDocRef = doc(database, 'users', userId);

                getDoc(userDocRef)
                    .then((docSnapshot) => {
                        if (docSnapshot.exists()) {
                            const userData = docSnapshot.data();
                            setUsername(userData.username);
                        } else {
                            console.error('Error fetching user data');
                        }
                    })
                    .catch((error) => {
                        console.error('Error fetching user data:', error);
                    });
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor:"#ffffff" }}>
                <View style={styles.profileAndnotification} >
                    <TouchableOpacity onPress={() => nav.navigate('ProfileScreen')} style={styles.nameAndpicture}>
                        <Image onPress={() => nav.navigate('ProfileScreen')} source={entryImage} style={styles.image} />
                        <Text onPress={() => nav.navigate('ProfileScreen')} style={styles.name}>Hi {username}</Text>
                    </TouchableOpacity>

                    <Ionicons name="notifications" size={28} color="black" style={styles.notificationIcon} onPress={() => nav.navigate('UserNotification')} />
                </View>
                

                <View style={styles.seachAndFilter}>
                    <Ionicons name="search" size={24} color="black" style={styles.searchicon} />
                    <TextInput placeholder='Markets around you' style={styles.search} />
                    <Ionicons name="filter-outline" size={28} style={styles.notificationIcon} />
                </View>

                <View style={styles.discountBanner}>
                    <View style={styles.discountBannerLeft}>
                        <Text style={styles.discountBannerText}>
                            10% Discount on
                            All Fresh Organic
                            Vegetables
                        </Text>

                        <TouchableWithoutFeedback  >
                            <View style={styles.SignUpButton}>
                                <Text style={{ color: "#fff", fontWeight: 600 }}>
                                    CHECK NOW
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <View>
                        <Image source={entryImage} style={styles.discountimage} />
                    </View>
                </View>


                <View style={styles.label}>
                    <Text style={{ color: "#808080", fontSize: 19, fontWeight: 600 }}>Catergories</Text>
                    <Text
                        onPress={() => navigation.navigate('CategoryScreen')}
                        style={{ color: myColors.primary, fontWeight: "bold", fontSize: 16 }}
                    >
                        See all
                    </Text>
                </View>

                <View horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categories}>
                    <HomeCategorycarousel />
                </View>




                <View style={styles.marketlabel}>
                    <Text style={{ color: "#808080", fontSize: 18, fontWeight: 600 }}>Markets</Text>
                    <Text
                        onPress={() => navigation.navigate('Markets')}
                        style={{
                            color: "#53E559",
                            fontWeight: "bold"
                        }}
                    >See all</Text>
                </View>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Markets')}
                    style={styles.markets}>
                    <Image source={homemarketimage} style={styles.homemarketimage} />
                </TouchableOpacity>


                <View style={styles.recommendedlabel}>
                    <Text style={{ color: "#808080", fontSize: 18, fontWeight: 600 }}>Recommended for you</Text>

                </View>


                <View style={styles.recomended}>
                    <HomeRecommendedcarousel />
                </View>


                <View style={styles.taglabel}>
                    <Text style={{ color: "#808080", fontSize: 18, fontWeight: 600 }}>Tags</Text>

                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.tags}>
                    <View style={styles.tag}>
                        <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>Fruits</Text>
                    </View>
                    <View style={{
                        height: 50,
                        width: 180,
                        backgroundColor: "#CD4040",
                        justifyContent: "center",
                        alignItems: "center",
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        marginHorizontal: 10,
                    }}>
                        <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>Tomato</Text>
                    </View>
                    <View
                        style={{
                            height: 50,
                            width: 180,
                            backgroundColor: "#DFA436",
                            justifyContent: "center",
                            alignItems: "center",
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            marginHorizontal: 10,
                        }}>
                        <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>Juice</Text>
                    </View>


                </ScrollView>



            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 5,
    },
    label: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical:15
    },
    marketlabel: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical:15
    },
    taglabel: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical:15
    },

    recommendedlabel: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical:15
    },


    image: {
        height: 40,
        width: 40,
        borderRadius: 50,
        position: "relative",

    },
    name: {
        left: 5,
        fontWeight: "bold"
    },
    nameAndpicture: {
        flexDirection: "row",
        alignItems: "center",
        left: 10

    },
    profileAndnotification: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical:10,
         
    },
    notificationIcon: {
        right: 20,
        color: "#53E559"
    },

    seachAndFilter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical:5
        

    },
    searchicon: {
        zIndex: 2,
        marginLeft: 15,
        position: "absolute",
        color: "#999999"
    },
    search: {
        height: responsiveHeight(6),
        paddingLeft: 30,
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        width: 310,
        left: 10,
    },

    discountBanner: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical:15
    },

    discountimage: {
        height: 200,
        width: 200,
        borderTopLeftRadius: 95,
        borderBottomLeftRadius: 95,
        overflow: "hidden"
    },
    discountBannerLeft: {
        width: 170,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    discountBannerText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#008000"
    },
    SignUpButton: {
        width: 150,
        borderRadius: 10,
        height: 40,
        backgroundColor: "#D38E10",
        alignItems: "center",
        justifyContent: "center",
        top: 50
    },

    categories: {
        paddingVertical:15

    },
    
    markets: {
        alignItems: "center",
        justifyContent: "center"

    },

    homemarketimage: {
        width: 379,
        height: 250
    },

    recomended: {
        paddingVertical: 2,


    },

     
    tags: {
        marginBottom: 30,
        paddingVertical: 5,

    },
    tag: {
        height: 50,
        width: 180,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginHorizontal: 10,


    },

});
