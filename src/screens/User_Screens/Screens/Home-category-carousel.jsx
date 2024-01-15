import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Categories } from '../../../utils/Data';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
 



export default function HomeCategorycarousel() {
    const  nav=useNavigation()
    return (
        <View style={{marginBottom:30}}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Categories}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                    style={{gap:15, }}
                    activeOpacity={
                        0.8
                    }
                        
                    >
                        <View
                         style={{
                            height: responsiveHeight(7),
                            borderWidth: 2,
                            borderColor: "#e3e3e3",
                            width: responsiveWidth(17),
                            marginRight: 20,
                            borderRadius: 15,
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            backgroundColor:"green"
                        }}
                        >
                        <Image
                            style={{ height: 40, width:39, resizeMode: "contain" }}
                            source={item.img } />
                        </View>
                        

                        <View style={{ paddingHorizontal: 10,   }}>
                            <Text style={{ fontSize: 17, fontWeight: 600, color: "#008000" }}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}

                            </Text>
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
