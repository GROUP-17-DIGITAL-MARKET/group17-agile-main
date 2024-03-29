import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { GREEN_COLORS, ORANGE_COLORS, WHITE_COLORS } from '../../../utils/Mycolors';

const entryImage = require('../../../../assets/entry-image.jpg');



export default function EntryScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={{ alignItems: "center" }}>
                <Image source={entryImage} style={styles.image} />
            </View>

            <View>
                <Text style={styles.freshDescription}>Hassle-free Fresh Groceries</Text>
                <Text style={styles.joinDescription}>
                    Join us to receive groceries as
                    early as 7AM daily in the morning.
                </Text>

            </View>



            <View style={{ top: 50, height: 250, justifyContent: "flex-end" }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Signin')}>
                    <View style={styles.SignInButton}>
                        <Text style={{ color: WHITE_COLORS.WHITE, fontWeight: "bold" }}>SIGN IN</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Signup')}>
                    <View style={styles.SignUpButton}>
                        <Text style={{ color: GREEN_COLORS.GREEN, fontWeight: "bold", }}>CREATE AN ACCOUNT</Text>
                    </View>
                </TouchableOpacity>

            </View>



        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE_COLORS.WHITE,
    },

    image: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
    },

    freshDescription: {
        fontSize: 22,
        display: "flex",
        color: ORANGE_COLORS.ORANGE,
        top: 15,
        display: "flex",
        textAlign: "center"
    },

    joinDescription: {
        fontSize: 16,
        top: 30,
        display: "flex",
        textAlign: "center"
    },
    SignInButton: {
        backgroundColor: GREEN_COLORS.GREEN,
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        marginHorizontal: 10,
        borderRadius: 15,
        fontWeight: "bold"
    },

    SignUpButton: {
        backgroundColor: WHITE_COLORS.WHITE,
        color: WHITE_COLORS.WHITE,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        marginHorizontal: 10,
        borderRadius: 15,
        fontWeight: "bold",
        marginTop: 20,
        borderWidth: 2,
        borderColor: GREEN_COLORS.GREEN
    }

});
