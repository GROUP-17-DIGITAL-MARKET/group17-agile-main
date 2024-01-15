import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback,  } from 'react-native';
const Fruits = require('../../../../assets/Fruits.png');
import { Ionicons, Feather} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GREEN_COLORS,  WHITE_COLORS } from '../../../utils/Mycolors';
const Grains = require('../../../../assets/grains.png');
const Meat = require('../../../../assets/Meat.png');
const Dairy = require('../../../../assets/Dairy.png');
const Beverages = require('../../../../assets/beverages.png');
const Cereals = require('../../../../assets/cereals.png');
const Fish = require('../../../../assets/Fish.png');
const Spice = require('../../../../assets/Spice.png');
const Oil = require('../../../../assets/Oil.png');



export default function Category({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: 20,
                alignItems: "center"
            }}>
                <Ionicons onPress={() => navigation.goBack()} name="chevron-back" size={28} color="black" />
               
            </View>


            <View style={styles.categories}>
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
                            <Image source={Spice} style={styles.categoryimage} />
                        </View>
                        <Text style={styles.categorytext}>Spices</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('Cereals')}>
                    <View style={styles.categoryrapper}>
                        <View style={styles.category}>
                            <Image source={Cereals} style={styles.categoryimage} />
                        </View>
                        <Text style={styles.categorytext}>Cereals</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>




            <View style={styles.categories}>
                <View style={styles.categoryrapper}>
                    <View style={styles.category}>
                        <Image source={Beverages} style={styles.categoryimage} />
                    </View>
                    <Text style={styles.categorytext}>Beverages</Text>
                </View>
                <View style={styles.categoryrapper}>
                    <View style={styles.category}>
                        <Image source={Dairy} style={styles.categoryimage} />
                    </View>
                    <Text style={styles.categorytext}>Dairy</Text>
                </View>
                <View style={styles.categoryrapper}>
                    <View style={styles.category}>
                        <Image source={Oil} style={styles.categoryimage} />
                    </View>
                    <Text style={styles.categorytext}>Oil</Text>
                </View>

            </View>
            <View style={styles.categories}>
                <View style={styles.categoryrapper}>
                    <View style={styles.category}>
                        <Image source={Fish} style={styles.categoryimage} />
                    </View>
                    <Text style={styles.categorytext}>Fish</Text>
                </View>
                <View style={styles.categoryrapper}>
                    <View style={styles.category}>
                        <Image source={Meat} style={styles.categoryimage} />
                    </View>
                    <Text style={styles.categorytext}>Meat</Text>
                </View>
                <View style={styles.categoryrapper}>
                    <View style={styles.category}>
                        <Image source={Grains} style={styles.categoryimage} />
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
        backgroundColor: WHITE_COLORS.WHITE,
        alignItems: "center",
        gap: 55,
         

    },

    categories: {
        flexDirection: "row",
        justifyContent: "space-between",
        top:20
    },
    categoryrapper: {
        width: 120,
        height: 80,
        alignItems: "center",

    },
    category: {
        height: 90,
        width: 90,
        backgroundColor: GREEN_COLORS.DEEP_GREEN,
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
        color: GREEN_COLORS.DEEP_GREEN,
        top: 3
    },

});
