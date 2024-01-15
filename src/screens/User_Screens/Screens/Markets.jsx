
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { MarketsList } from '../../../utils/Data';
import { SafeAreaView } from 'react-native-safe-area-context';
 



export default function Markets() {
    const  nav=useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
            showsVerticalScrollIndicator={false}
                data={MarketsList}
                renderItem={({ item, index }) => (
                     
                    <TouchableOpacity
                    activeOpacity={
                        0.8
                    }    
                    onPress={() => nav.navigate('CategoryScreen')}

                     style={{
                        height: responsiveHeight(23),
                        borderWidth: 2,
                        borderColor: "#e3e3e3",
                        width: responsiveWidth(85),
                        borderRadius: 15,
                        marginBottom:20,
                        paddingBottom: 5
                         
                    }}
                    >
                        <Image
                            style={{ height: "100%",width: "100%", resizeMode: "contain" }}
                            source={item.img} />
                    </TouchableOpacity>
                    
                     
                )} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:"center",
        
    },



});
