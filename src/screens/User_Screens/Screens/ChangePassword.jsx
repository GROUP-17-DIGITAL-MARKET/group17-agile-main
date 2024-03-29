import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,  Alert } from 'react-native';
import { authentication, firebaseReauthenticateWithCredential, firebaseUpdatePassword } from '../../../../config/firebase';
import { GREEN_COLORS, WHITE_COLORS, myColors } from '../../../utils/Mycolors';
import { EmailAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather} from '@expo/vector-icons';

export default function ChangePassword({navigation}) {
  const nav = useNavigation()
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = async () => {
    try {
      const user = authentication.currentUser;

      if (!user) {
        // If user is not signed in, prompt them to sign in with email and password
        Alert.alert('Please sign in before changing your password');
       signOut(authentication)
      .then(() => {
        nav.replace('Signin')
       
      })
        return;
      }

      // Re-authenticate the user with their current password before changing it
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await firebaseReauthenticateWithCredential(user, credential);

      // Update the password
      await firebaseUpdatePassword(user, newPassword);

      Alert.alert('Password changed successfully!');
      signOut(authentication)
      .then(() => {
        nav.replace('Signin')
       
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: 20,
                alignItems: "center"
            }}>
                <Ionicons onPress={() => navigation.goBack()} name="chevron-back" size={28} color="black" />
               
            </View>
      <Text style={{fontSize:30, fontWeight:"bold"}}>Change Password</Text>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Current Password"
          secureTextEntry
          maxLength={8}
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          maxLength={8}
          onChangeText={setNewPassword}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleChangePassword}
        style={styles.changePasswordButton}
      >
        <Text style={{ fontSize: 20, fontWeight: 600, color: WHITE_COLORS.WHITE }}>Change Password</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLORS.WHITE,
    alignItems:"center",
    gap:30,
     
  },
  textInput: {
    height: 50,
    width: 350,
    backgroundColor: myColors.fourth,
    borderRadius: 40,
    paddingHorizontal: 40,
  },
  changePasswordButton: {
    backgroundColor: GREEN_COLORS.GREEN,
    height: 60,
    width:291,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
