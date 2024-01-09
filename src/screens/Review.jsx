
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { MarketsList } from '../utils/Data';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import StarRating from 'react-native-star-rating-widget';
import { useState } from 'react';
import {
    Feather
} from "@expo/vector-icons";
import { useSelector } from 'react-redux';


export default function Review({navigation}) {
    const nav = useNavigation()
    const [rating, setRating] = useState(0);
    const storeData = useSelector((state) => state.CartSlice);
    return (
        <SafeAreaView style={styles.container}>

            <View style={{ height: 220, marginBottom:20}}>
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
                                borderWidth:1,
                                borderColor:"#e3e3e3",
                                marginBottom:5
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

            <View style={{ alignItems: "center", gap: 10 }}>
                <Text style={{ fontSize: 23, fontWeight: "bold" }}>How is your order?</Text>
                <Text style={{ fontSize: 14, fontWeight: "500", color: "#808080" }}>Your overall rating</Text>

            </View>

            <View style={{ alignItems: "center" }}>
                <StarRating
                    rating={rating}
                    onChange={setRating}
                />
            </View>

            <View>
                <Text style={{ color: "#151C23", fontWeight: "bold" }}>Add detailed review</Text>
                <TextInput
                    placeholder='Enter here'
                    multiline={true}
                    style={{ borderWidth: 1, height: 114, borderRadius: 10, width:"100%", borderColor: "#808080", }} />
            </View>

            <TouchableOpacity
                activeOpacity={0.8}
                style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center", }}>
                <Feather name="camera" size={24} color="#53E559" />
                <Text style={{ color: "#53E559", fontWeight: "bold", fontSize: 15 }}>Add photo</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>
                <TouchableOpacity
                    style={{
                        borderWidth: 2,
                        borderRadius: 7,
                        borderColor: "#53E559",
                        height: 39,
                        width: 139,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    activeOpacity={0.8}

                >
                    <Text style={{ fontSize: 20, fontWeight: 600, color: "#53E559", }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('ReviewSuccess')}
                    style={{
                        borderWidth: 2,
                        borderRadius: 7,
                        borderColor: "#53E559",
                        height: 39,
                        width: 139,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#53E559"
                    }}
                    activeOpacity={0.8}

                >
                    <Text style={{ fontSize: 20, fontWeight: 600, color: "#fff" }}>
                        Submit
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
        paddingHorizontal: 20,

        gap: 20

    },



});
