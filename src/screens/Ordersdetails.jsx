import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  form,
} from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { FlatList } from "react-native-gesture-handler";
import { myColors } from "../utils/Mycolors";
import { useNavigation } from "@react-navigation/native";
import ProgressSteps, {
  Title,
  Content,
} from "@joaosousa/react-native-progress-steps";
import { useState } from "react";

export default function Ordersdetails({ navigation }) {
  const nav = useNavigation();
  // const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);

  let amount = 0;
  storeData.forEach((element) => {
    amount += element.price * element.quantity;
  });
  const [step, setStep] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", paddingVertical:20 }}>
        <AntDesign name="arrowleft" size={34} color="#53E559" />
        <View
          style={{
            width: 300,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            My Order Details
          </Text>
        </View>
      </View>

      {/* Parent container */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          borderRadius: 20,
          paddingHorizontal: 20,
          paddingVertical:20
        }}
      >
        <View style={{height:200, alignItems:"center", justifyContent:"center"}}>
          <ProgressSteps
            currentStep={step}
            steps={[
              {
                id: "one",
                title: <Title> Order Confirmed</Title>,
                content: <Text> 12.11.2023</Text>,
              },
              {
                id: "two",
                title: <Title> Order Processing</Title>,
                content: <Text> 12.11.2023</Text>,
              },
              {
                id: "Three",
                title: <Title> Order Delivery</Title>,
                content: <Text> 12.11.2023</Text>,
              },
            ]}
            colors={{
              title: {
                text: {
                  normal: "#151C23",
                  active: "#151C23",
                  completed: "#151C23",
                  size: 17,
                },
              },
              marker: {
                text: {
                  normal: "#FFFFFF",
                  active: "#FFFFFF",
                  completed: "#FFFFFF",
                },
                line: {
                  normal: "#008000",
                  active: "#008000",
                  completed: "#008000",
                },
              },
            }}
          />
        </View>

        <Text style={{ fontSize: 20, fontWeight: 900, marginVertical: 20 }}>
          Product Details
        </Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={storeData}
          renderItem={({ item, index }) => (
            <View
              style={{
                height: responsiveHeight(10),
                flexDirection: "row",
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  flex: 0.35,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ height: 80, width: 80, resizeMode: "contain" }}
                  source={item.img}
                />
              </View>

              {/* Child 2 */}
              <View
                style={{
                  flex: 0.7,
                  paddingHorizontal: 10,
                  justifyContent: "center",
                  gap: 10,
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
                      color: "#151C23",
                      fontSize: 17,
                      fontWeight: "normal",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#151C230",
                    }}
                  >
                    {item.quantity * item.price}
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
                    }}
                  ></View>

                  <Text>{item.quantity}x</Text>
                </View>
              </View>
            </View>
          )}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 5,
            paddingVertical: 20,
          }}
        >
          <Text style={{ color: "#808080", fontSize: 15 }}>Total Price</Text>
          <Text style={{ color: "#808080", fontSize: 15 }}>{amount}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 10,
    paddingTop: 0,
    gap: 15,
  },
  header: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
});
