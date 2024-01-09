import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import { MyorderList } from "../utils/Data";
import {
  EvilIcons,
  AntDesign,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

// const confirmed = require("../../assets/confirmed.png");

export default function Myorders({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <AntDesign name="arrowleft" size={34} color="#53E559" onPress={() => navigation.goBack()}/>
        <View
          style={{
            width: 300,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>My Orders</Text>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={MyorderList}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Ordersdetails", {
                main: item,
              })
            }
            style={{
              height: 90,
              backgroundColor: "#FFFFFF",
              borderRadius: 15,
              justifyContent: "space-evenly",
              marginVertical: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text>Order Id:</Text>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  #{item.orderid}
                </Text>
              </View>
              <Text style={{ color: "#808080" }}>{item.date}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
            >
              <Text>Status:</Text>
              <Image source={item.img} style={{ width: 260 }} />
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
