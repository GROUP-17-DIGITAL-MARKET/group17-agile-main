import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { recommended } from '../utils/Data';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../Redux/CartSlice';



export default function HomeRecommendedcarousel() {
    const dispatch = useDispatch();
    const storeData = useSelector((state) => state.CartSlice);
    const  nav=useNavigation()
    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={recommended}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                    activeOpacity={
                        0.8
                    }
                        
                    onPress={() => nav.navigate('Details',{
                        main:item
                    })}

                     style={{
                        height: responsiveHeight(23),
                        borderWidth: 2,
                        borderColor: "#e3e3e3",
                        width: responsiveWidth(45),
                        marginRight: 20,
                        borderRadius: 15
                    }}
                    >
                        <Image
                            style={{ height: 125, resizeMode: "contain" }}
                            source={{ uri: item.img }} />
                        <View style={{ paddingHorizontal: 10, gap:5 }}>
                            <Text style={{ fontSize: 17, fontWeight: 600, color: "#008000" }}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}

                            </Text>
 
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                              <Text style={{color:"#808080"}}>{item.pieces}</Text>

                              {
                                storeData.some((value) => value.name == item.name) ? (
                                    <FontAwesome5 
                                    name="minus-circle"
                                     size={30} color="#008000" 
                                     onPress={() => {
                                        dispatch(removeFromCart(item));
                                     }}
                                     />
                                ) :
                                (
                                    <FontAwesome5 
                                    name="plus-circle"
                                     size={30} color="#008000" 
                                     onPress={() => {
                                        dispatch(addToCart(item));
                                     }}
                                     />
                                )
                                
                              }
                             
                            </View>
                        </View>

                        


                    </TouchableOpacity>
                )} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },



});
