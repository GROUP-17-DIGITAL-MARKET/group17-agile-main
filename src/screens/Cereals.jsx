import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { fruitsAndvegetables } from '../utils/Data';
 



export default function Cereals() {
    const  nav=useNavigation()
    return (
        <View style={styles.container}>
            <FlatList 
            showsVerticalScrollIndicator={false}
            key={`flatlist-${2}`}
               numColumns={2}
                data={fruitsAndvegetables}
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
                        borderRadius: 15,
                        marginHorizontal: 10,
                        paddingBottom: 5
                         
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
                              <FontAwesome5 name="plus-circle" size={30} color="#008000" />
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
        alignItems:"center",
        
    },



});
