
import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import PhoneNumberInput from "react-native-phone-number-input";
import { GREEN_COLORS, WHITE_COLORS } from "../utils/Mycolors";
  


export default function PhoneInput() {
  const phoneInputRef = useRef(null);

  return (
    <View style={styles.inputContainer}>
      <PhoneNumberInput
        ref={phoneInputRef}
        defaultCode="GH"
        layout="first"
        onChangeText={(text) => {
          console.log("TEXT: -- ", text);
        }}
        onChangeFormattedText={(text) => {
          console.log("FORMATED: -- ", text);
        }}
        withDarkTheme
        containerStyle={{
          backgroundColor: "transparent",
        }}
        textInputProps={{
          selectionColor: WHITE_COLORS.WHITE,
        }}
        textContainerStyle={{
          backgroundColor: "transparent",
          borderLeftColor: WHITE_COLORS.WHITE,
          borderLeftWidth: 1,
        }}
        textInputStyle={{
          color: WHITE_COLORS.WHITE
        }}
        codeTextStyle={{
          color: WHITE_COLORS.WHITE,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderColor:  GREEN_COLORS.GREEN[400],
    borderWidth: 1,
    borderRadius: 16,
    width: "100%",
    height: 54,
  },
});
