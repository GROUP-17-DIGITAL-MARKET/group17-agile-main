import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
 
 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const badge = require("../../assets/shopperearningbadge.png");

export default function ShopperEarnings({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold", alignSelf: "center", marginTop: 10 }}>Earnings</Text>

      <Image source={badge} style={{ alignSelf: "center" , marginBottom:50}} />
      
<View style={{
  height:30,
   alignItems:"center", 
   backgroundColor:"#DFA436",
   borderTopLeftRadius:20,
   borderTopRightRadius:20
   }}>
  <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:"bold"}}>Today</Text>
</View>
      <View style={{
        height: 73,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: "#808080"
      }}>
        <View>
          <Text style={{ color: "#151C23", fontSize: 16 }}>Number 12, Antelope Street</Text>
          <Text style={{ color: "#808080" }}>17 Nov, 2023, 13:45pm</Text>
        </View>
        <Text style={{ color: "#53E559" }}>GHS60.00</Text>

      </View>

      <View style={{
        height: 73,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: "#808080"
      }}>
        <View>
          <Text style={{ color: "#151C23", fontSize: 16 }}>Number 12, Antelope Street</Text>
          <Text style={{ color: "#808080" }}>17 Nov, 2023, 13:45pm</Text>
        </View>
        <Text style={{ color: "#53E559" }}>GHS60.00</Text>

      </View>

      <View style={{
        height: 73,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: "#808080"
      }}>
        <View>
          <Text style={{ color: "#151C23", fontSize: 16 }}>Number 12, Antelope Street</Text>
          <Text style={{ color: "#808080" }}>17 Nov, 2023, 13:45pm</Text>
        </View>
        <Text style={{ color: "#53E559" }}>GHS60.00</Text>

      </View>

      <View style={{
        height: 73,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: "#808080"
      }}>
        <View>
          <Text style={{ color: "#151C23", fontSize: 16 }}>Number 12, Antelope Street</Text>
          <Text style={{ color: "#808080" }}>17 Nov, 2023, 13:45pm</Text>
        </View>
        <Text style={{ color: "#53E559" }}>GHS60.00</Text>

      </View>

      <View style={{
        height: 73,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: "#808080"
      }}>
        <View>
          <Text style={{ color: "#151C23", fontSize: 16 }}>Number 12, Antelope Street</Text>
          <Text style={{ color: "#808080" }}>17 Nov, 2023, 13:45pm</Text>
        </View>
        <Text style={{ color: "#53E559" }}>GHS60.00</Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
});
