import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import DropBox from './DropBox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GREEN_COLORS, WHITE_COLORS, myColors } from '../../../utils/Mycolors';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../../Redux/CartSlice';
 
 

export default function Details({ navigation, route }) {
    const storeData = useSelector((state) => state.CartSlice);
    const dispatch = useDispatch();
    const productData = route.params.main;
    const { name, price, pieces, img } = productData;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='white' />
            <View style={{justifyContent:"center", alignItems:"center"}}>
                <Image
                     resizeMode="contain"
                    style={{
                        height: 300,
                        borderBottomRightRadius: 15,
                        borderBottomLeftRadius: 15,
                        width:300
                    }}
                    source={ img } />
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                position: "absolute",
                width: "100%",
                marginTop: 50,
                paddingHorizontal: 20,
                alignItems: "center"
            }}>
                <Ionicons onPress={() => navigation.goBack()} name="chevron-back" size={28} color="black" />
                <Feather name="share" size={28} color="black" />
            </View>

            <View style={{ paddingHorizontal: 15 }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Text style={{ fontSize: 25, fontWeight: 600, color: "black" }}>
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Text>

                    <MaterialIcons name="favorite-border" size={24} color="black" />
                </View>
                <Text style={{ marginTop: 7, fontSize: 17, color: "#808080" }}>{pieces}</Text>
                <Text style={{
                    marginTop: 7,
                    fontSize: 25,
                    color: "black",
                    fontWeight: "bold"
                }}>
                    ₵{price}
                </Text>
                <DropBox />

                <View style={{

                    height: 100,
                    justifyContent: "flex-end"
                }}>

                    {
                        storeData.some((value) => value.name == productData.name) ? (
                            <TouchableOpacity
                            disabled={true}
                            activeOpacity={0.8}
                            style={{
                                backgroundColor: "grey",
                                borderRadius: 15,
                                height: 70,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>Added to Cart</Text>
                        </TouchableOpacity>  
                        ) : (
                            <TouchableOpacity
                            onPress={() => {
                                dispatch(addToCart(productData));
                                navigation.navigate('CartPage')
                            }}
                            activeOpacity={0.8}
                            style={{
                                backgroundColor: GREEN_COLORS.GREEN,
                                borderRadius: 15,
                                height: 70,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text style={{ color: WHITE_COLORS.WHITE, fontSize: 18, fontWeight: "700" }}>Add to Cart</Text>
                        </TouchableOpacity> 
                        )
                           
                    }


                </View>


            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        backgroundColor: WHITE_COLORS.WHITE
    },

});
