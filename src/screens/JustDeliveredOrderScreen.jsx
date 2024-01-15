
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { MarketsList } from '../utils/Data';
import { SafeAreaView } from 'react-native-safe-area-context';

const JustDelivered = require('../../assets/Justdelivered.png');


export default function JustDeliveredOrder({navigation}) {
    const nav = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <Image source={JustDelivered} style={styles.image} />

            <Text style={{fontSize:25, fontWeight:"bold", color:"#151C23", marginVertical:15}}>Congratulations!</Text>
            <Text style={{fontSize:17, color:"#999999", textAlign:"center"}}>Hurray! We just delivered your #123456 order successfully</Text>


            <View style={{ marginTop:100 }}>
                <TouchableOpacity
                    style={styles.RateButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('RateProduct')}>
                        <Text style={{ color: "#fff", fontWeight: "bold" }}>RATE THE PRODUCT </Text>      
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.RateButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('ShopperReview')}>
                        <Text style={{ color: "#fff", fontWeight: "bold" }}>RATE THE SHOPPER </Text>      
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.BrowseButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Home')}>     
                        <Text style={{ color: "#53E559", fontWeight: "bold", }}>BROWSE HOME</Text>    
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",

    },
    image:{
        marginBottom:20
    },
    RateButton: {
        backgroundColor: "#53E559",
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height:50,
        borderRadius: 15,   
        width:285,
        marginTop:20
    },

    BrowseButton: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height:50,
        width:285,
        borderRadius: 15,
        marginTop: 20,
        borderWidth: 2,
        borderColor: "#53E559"
    }

});
