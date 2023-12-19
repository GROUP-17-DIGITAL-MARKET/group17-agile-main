import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

const entryImage = require("../../assets/Shopperentryimage.png");

export default function ShopperEntryScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image source={entryImage} style={styles.image} />
      </View>

      <View>
        <Text style={styles.freshDescription}>Fast Delivery Service</Text>
        <Text style={styles.joinDescription}>
          Fast delivery of <Text style={{color:"#DFA436"}}>groceries</Text>  at a go!
        </Text>
      </View>

      <View style={{ top: 50, height: 250, justifyContent: "center", gap:20 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("ShopperSigninScreen")}
        >
          <View style={styles.SignInButton}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize:16 }}>SIGN IN</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("ShopperSignupScreen")}
        >
          <View style={styles.SignUpButton}>
            <Text style={{ color: "#53E559", fontWeight: "bold", fontSize:16 }}>
              CREATE AN ACCOUNT
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    width: 400,
    height: 400,
    resizeMode: "contain",
  },

  freshDescription: {
    fontSize: 22,
    display: "flex",
    color: "#DFA436",
    top: 15,
    display: "flex",
    textAlign: "center",
  },

  joinDescription: {
    fontSize: 16,
    top: 30,
    display: "flex",
    textAlign: "center",
  },
  SignInButton: {
    backgroundColor: "#53E559",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    fontWeight: "bold",
  },

  SignUpButton: {
    backgroundColor: "#fff",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    fontWeight: "bold",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#53E559",
  },
});
