import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Fruits = require('../../assets/Fruits.png');

export default function Category({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View  style={styles.categories}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('FruitsAndVegetables')}>
                    <View style={styles.categoryrapper}>
                        <View style={styles.category}>
                            <Image source={Fruits} style={styles.categoryimage} />
                        </View>
                        <Text style={styles.categorytext}>Fruits</Text>
                    </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Spices')}>
                    <View style={styles.categoryrapper}>
                        <View style={styles.category}>
                            <Image source={Fruits} style={styles.categoryimage} />
                        </View>
                        <Text style={styles.categorytext}>Spices</Text>
                    </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Cereals')}>
                    <View style={styles.categoryrapper}>
                        <View style={styles.category}>
                            <Image source={Fruits} style={styles.categoryimage} />
                        </View>
                        <Text style={styles.categorytext}>Cereals</Text>
                    </View>  
                    </TouchableWithoutFeedback>
                </View>



                
                <View  style={styles.categories}>
                    <View style={styles.categoryrapper}>
                        <View style={styles.category}>
                            <Image source={Fruits} style={styles.categoryimage} />
                        </View>
                        <Text style={styles.categorytext}>Beverages</Text>
                    </View>
                    <View style={styles.categoryrapper}>
                        <View style={styles.category}>
                            <Image source={Fruits} style={styles.categoryimage} />
                        </View>
                        <Text style={styles.categorytext}>Spices</Text>
                    </View>
                    <View style={styles.categoryrapper}>
                        <View style={styles.category}>
                            <Image source={Fruits} style={styles.categoryimage} />
                        </View>
                        <Text style={styles.categorytext}>Oil</Text>
                    </View>
                   
                </View>
                <View  style={styles.categories}>
                    <View style={styles.categoryrapper}>
                        <View style={styles.category}>
                            <Image source={Fruits} style={styles.categoryimage} />
                        </View>
                        <Text style={styles.categorytext}>Fish</Text>
                    </View>
                    <View style={styles.categoryrapper}>
                        <View style={styles.category}>
                            <Image source={Fruits} style={styles.categoryimage} />
                        </View>
                        <Text style={styles.categorytext}>Cereals</Text>
                    </View>
                    <View style={styles.categoryrapper}>
                        <View style={styles.category}>
                            <Image source={Fruits} style={styles.categoryimage} />
                        </View>
                        <Text style={styles.categorytext}>Grains</Text>
                    </View>
                   
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:"center",
        gap:55,
        justifyContent:"center"
    },

    categories: {  
        flexDirection:"row",
        justifyContent:"space-between",
    },
    categoryrapper: {
        width: 120,
        height: 80,
        alignItems: "center",
        
    },
    category: {
        height: 90,
        width: 90,
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
    
});
