import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';


export default function DeliveryNotification({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={{
                    fontSize: 18,
                    color: "#000000",
                    fontWeight: "bold",
                    marginVertical: 30
                }}
            >November 2023</Text>
            <View style={{ borderBottomColor: "#000", borderBottomWidth: 1, height: 90, justifyContent: "space-around" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ color: "#53E559", fontSize: 16, fontWeight: "bold" }}>Promotion</Text>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <Text style={{ color: "#808080" }}>17 Nov</Text>
                        <Text style={{ color: "#808080" }}> 8:00am</Text>
                    </View>
                </View>

                <Text style={{ color: "#808080" }}>
                    5% discount on all deliveries made from Makola
                    market Today!
                </Text>
            </View>

            <View style={{ borderBottomColor: "#000", borderBottomWidth: 1, height: 90, justifyContent: "space-around" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ color: "#D5697C", fontSize: 16, fontWeight: "bold" }}>Update</Text>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <Text style={{ color: "#808080" }}>17 Nov</Text>
                        <Text style={{ color: "#808080" }}> 8:00am</Text>
                    </View>
                </View>

                <Text style={{ color: "#808080" }}>
                    The Groceryhub application has a latest version
                    on Play Store and Apple App Store. Update
                    immediately to enjoy
                </Text>
            </View>

            <Text style={{
                fontSize: 18,
                color: "#000000",
                fontWeight: "bold",
                marginVertical: 30
            }}>
                October 2023
            </Text>

            <View style={{ borderBottomColor: "#000", borderBottomWidth: 1, height: 90, justifyContent: "space-around" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ color: "#53E559", fontSize: 16, fontWeight: "bold" }}>Promotion</Text>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <Text style={{ color: "#808080" }}>17 Nov</Text>
                        <Text style={{ color: "#808080" }}> 8:00am</Text>
                    </View>
                </View>

                <Text style={{ color: "#808080" }}>
                    5% discount on all deliveries made from Makola
                    market Today!
                </Text>
            </View>

            <View style={{ borderBottomColor: "#000", borderBottomWidth: 1, height: 90, justifyContent: "space-around" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ color: "#D5697C", fontSize: 16, fontWeight: "bold" }}>Update</Text>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <Text style={{ color: "#808080" }}>17 Nov</Text>
                        <Text style={{ color: "#808080" }}> 8:00am</Text>
                    </View>
                </View>

                <Text style={{ color: "#808080" }}>
                    The Groceryhub application has a latest version
                    on Play Store and Apple App Store. Update
                    immediately to enjoy
                </Text>
            </View>

            <View style={{ borderBottomColor: "#000", borderBottomWidth: 1, height: 90, justifyContent: "space-around" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ color: "#53E559", fontSize: 16, fontWeight: "bold" }}>Promotion</Text>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <Text style={{ color: "#808080" }}>17 Nov</Text>
                        <Text style={{ color: "#808080" }}> 8:00am</Text>
                    </View>
                </View>

                <Text style={{ color: "#808080" }}>
                    5% discount on all deliveries made from Makola
                    market Today!
                </Text>
            </View>





















        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        
    },


});
