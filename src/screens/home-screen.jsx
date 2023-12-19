import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView, SafeAreaView, TextInput, } from 'react-native';
import { EvilIcons, AntDesign, FontAwesome, Ionicons, } from '@expo/vector-icons';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { myColors } from '../utils/Mycolors';

const entryImage = require('../../assets/discountbannerimage.png');
const homemarketimage = require('../../assets/dome.png');

import HomeRecommendedcarousel from './Home-recomended-carousel';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeCategorycarousel from './Home-category-carousel';


export default function HomeScreen({ navigation }) {
    const nav = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ gap: 20, flex: 1 }}>
                <View style={styles.profileAndnotification} >
                    <TouchableOpacity onPress={() => nav.navigate('ProfileScreen')} style={styles.nameAndpicture}>
                        <Image onPress={() => nav.navigate('ProfileScreen')} source={entryImage} style={styles.image} />
                        <Text onPress={() => nav.navigate('ProfileScreen')} style={styles.name}>Hi Selassi</Text>
                    </TouchableOpacity>

                    <Ionicons name="notifications" size={28} color="black" style={styles.notificationIcon} onPress={() => nav.navigate('UserNotification')} />
                </View>

                <View style={styles.seachAndFilter}>
                    <Ionicons name="search" size={24} color="black" style={styles.searchicon} onPress={() => navigation.goBack()} />
                    <TextInput placeholder='Markets around you' style={styles.search} />
                    <Ionicons name="filter-outline" size={28} color="black" style={styles.notificationIcon} onPress={() => navigation.goBack()} />
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

                <View style={styles.markets}>
                    <Image source={homemarketimage} style={styles.homemarketimage} />
                </View>


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
        paddingTop: 50,

    },
    label: {
        flexDirection: "row",
        justifyContent: "space-between",
        top: 50,
        paddingHorizontal: 15
    },
    marketlabel: {
        flexDirection: "row",
        justifyContent: "space-between",
        top: 110,
        paddingHorizontal: 15
    },
    taglabel: {
        flexDirection: "row",
        justifyContent: "space-between",
        top: 180,
        paddingHorizontal: 15
    },

    recommendedlabel: {
        flexDirection: "row",
        justifyContent: "space-between",
        top: 150,
        paddingHorizontal: 15
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
        justifyContent: "space-between"
    },
    notificationIcon: {
        right: 20,
        color: "#53E559"
    },

    seachAndFilter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        top: 10,

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
        backgroundColor: "#fff",
        top: 30,
        flexDirection: "row",
        justifyContent: "space-between"
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
        top: 95,
        paddingTop: 8,
        paddingBottom: 10,


    },
    categoryrapper: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    category: {
        height: 70,
        width: 70,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        left: 5,

    },
    categoryimage: {
        height: 34.5,
        width: 34.5
    },
    categorytext: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#008000",
        top: 3
    },


    markets: {
        top: 130,
        alignItems: "center",
        justifyContent: "center"

    },

    homemarketimage: {
        width: 379,
        height: 250
    },

    recomended: {

        top: 170,
        paddingVertical: 2,


    },

    recomendeditem: {
        height: 140,
        width: 160,
        borderWidth: 2,
        borderRadius: 10,
        padding: 3
    },
    recommendedimage: {
        height: 90,
        left: 5,
    },
    priceandplusicon: {
        flexDirection: "row",
        justifyContent: "space-between",
        top: 5
    },
    tags: {
        marginTop: 200,
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
