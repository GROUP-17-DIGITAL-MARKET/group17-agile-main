
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
const entryImage = require('../../assets/entry-image.jpg');




export default function ShopperHistory({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
       
      <Text style={{ fontSize: 25, fontWeight: "bold", alignSelf: "center", marginTop: 50 }}>History</Text>
       

        <View style={{
          borderWidth: 2,
          borderColor: "#808080",
          borderStyle: 'dashed',
          height: 90,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 10,
          backgroundColor: "#fff",
          marginVertical: 5
        }}>

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: "30%", }}>
            <Image source={entryImage} style={{ width: 50, height: 50, resizeMode: "contain", borderRadius: 500 }} />
          </View>

          <View style={{ gap: 10, width: "70%" }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#808080" }}>Delivery to UPSA, Atomic</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text style={{ color: "#53E559", fontWeight: "bold" }}>Delivered</Text>
              <Text style={{ color: "#808080" }}>2 items</Text>
            </View>

          </View>

        </View>

        <View style={{
          borderWidth: 2,
          borderColor: "#808080",
          borderStyle: 'dashed',
          height: 90,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 10,
          backgroundColor: "#fff",
          marginVertical: 5
        }}>

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: "30%", }}>
            <Image source={entryImage} style={{ width: 50, height: 50, resizeMode: "contain", borderRadius: 500 }} />
          </View>

          <View style={{ gap: 10, width: "70%" }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#808080" }}>Delivery to Ecobank, Spintex</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text style={{ color: "#D5697C", fontWeight: "bold" }}>Cancelled</Text>
              <Text style={{ color: "#808080" }}>6 items</Text>
            </View>

          </View>

        </View>

        <View style={{
          borderWidth: 2,
          borderColor: "#808080",
          borderStyle: 'dashed',
          height: 90,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 10,
          backgroundColor: "#fff",
          marginVertical: 5
        }}>

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: "30%", }}>
            <Image source={entryImage} style={{ width: 50, height: 50, resizeMode: "contain", borderRadius: 500 }} />
          </View>

          <View style={{ gap: 10, width: "70%" }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#808080" }}>Delivery to Antelope street, Ashongman</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text style={{ color: "#53E559", fontWeight: "bold" }}>Delivered</Text>
              <Text style={{ color: "#808080" }}>22 items</Text>
            </View>

          </View>

        </View>


















      </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    gap:10
  },


});
