
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import { EvilIcons, AntDesign, FontAwesome, Ionicons, } from '@expo/vector-icons';
import CustomNotificationTab from '../../../components/Notifications/Index';

const background = require('../../../../assets/Notificationbackground.png');


export default function UserNotification({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground  source={background} style={styles.background} >
            <View style={{ flexDirection: "row", gap: 80, paddingVertical: 10, marginBottom:20 }}>
                <AntDesign name="arrowleft" size={34} color="#53E559" style={{ marginHorizontal: 20 }} onPress={() => navigation.goBack()} />
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>Notification</Text>
            </View>

            <View style={{flex:1}}>
                <CustomNotificationTab />
            </View>

            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:55,
        paddingHorizontal: 15
    },
    background: {
        flex: 1,
        // justifyContent: 'center',
      },

});
