import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  form,
} from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../../Redux/CartSlice";
import { FlatList } from "react-native-gesture-handler";
import { BLACK_COLORS, GRAY_COLORS, GREEN_COLORS, WHITE_COLORS, } from "../../../utils/Mycolors";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const checkoutline = require("../../../../assets/checkoutline.png");

export default function Cart({ navigation }) {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);

  let amount = 0;
  storeData.forEach((element) => {
    amount += element.price * element.quantity;
  });


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Cart</Text>

      {/* Parent container */}
      <View style={{ flex: 0.98 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={storeData}
          renderItem={({ item, index }) => (
            <View
              style={{
                height: responsiveHeight(17),
                borderBottomColor: GRAY_COLORS.LIGHT_GRAY,
                borderBottomWidth: 2,
                flexDirection: "row",
                backgroundColor: WHITE_COLORS.WHITE,
                borderRadius: 20,
              }}
            >
              {/* Child 1  */}
              <View
                style={{
                  flex: 0.35,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ height: 120, width: 120, resizeMode: "contain" }}
                  source={item.img}
                />
              </View>

              {/* Child 2 */}
              <View
                style={{
                  
                  flex: 0.7,
                  paddingHorizontal: 10,
                  justifyContent: "center",
                  gap: 40,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: BLACK_COLORS.BLACK,
                      fontSize: 20,
                      fontWeight: "600",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    GH₵ {item.quantity * item.price}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 15,
                    }}
                  >
                    <AntDesign
                      style={{
                        padding: 5,
                        borderRadius: 5,
                        borderWidth: 2,
                        borderColor: GREEN_COLORS.GREEN,
                      }}
                      name="minus"
                      size={24}
                      color="black"
                      onPress={() => {
                        dispatch(decrementQuantity(item));
                      }}
                    />

                    <Text>{item.quantity}</Text>
                    <AntDesign
                      style={{
                        padding: 5,
                        borderRadius: 5,
                        borderWidth: 2,
                        borderColor: GREEN_COLORS.GREEN,
                      }}
                      name="plus"
                      size={24}
                      color="black"
                      onPress={() => {
                        if (item.quantity == 10) {
                        } else {
                          dispatch(incrementQuantity(item));
                        }
                      }}
                    />
                  </View>

                  <MaterialIcons
                    onPress={() => {
                      dispatch(removeFromCart(item));
                    }}
                    name="delete"
                    size={28}
                    color="#53E559"
                  />
                </View>
              </View>
            </View>
          )}
        />
      </View>

      <View style={{ justifyContent: "flex-end", gap: 10 }}>
        
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ color: GRAY_COLORS.GRAY, fontSize: 15 }}>Price</Text>
          <Text style={{ color: GRAY_COLORS.GRAY, fontSize: 15 }}>{amount}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ color: GRAY_COLORS.GRAY, fontSize: 15 }}>Discount</Text>
          <Text style={{ color: GRAY_COLORS.GRAY, fontSize: 15 }}>0</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image source={checkoutline} />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ color:  GRAY_COLORS.GRAY, fontSize: 15 }}>Total Price</Text>
          <Text style={{ color:  GRAY_COLORS.GRAY, fontSize: 15 }}>
            {amount}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Checkout");
          }}
          activeOpacity={0.8}
          style={{
            backgroundColor: GREEN_COLORS.GREEN,
            borderRadius: 15,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: WHITE_COLORS.WHITE, fontSize: 18, fontWeight: "700" }}>
            CHECKOUT
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 10,
    
    gap: 15,
  },
  header: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
});
