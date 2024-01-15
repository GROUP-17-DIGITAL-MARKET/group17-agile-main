import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
const background = require('../../../../assets/profilebackground.png');

import { Ionicons } from '@expo/vector-icons';
import { BLACK_COLORS, GREEN_COLORS, WHITE_COLORS } from '../../../utils/Mycolors';


const ChatScreen = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() === '') {
      return;  
    }

    const newMessage = { text: inputText, id: messages.length.toString() };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background} style={styles.background} >
        <View style={{
          flexDirection: "row",
          width: "100%",
          gap:40,
          alignItems: "center",
           
        }}>
          <Ionicons onPress={() => navigation.goBack()} name="chevron-back" size={28} color="black" />
          <Text style={{ fontSize: 25, fontWeight: "bold", color: BLACK_COLORS.BLACK, textAlign: "center", marginVertical: 20 }} >Chat</Text>
        </View>
       

        
        <View style={styles.chatContainer}>

          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (


              <View style={styles.messageContainer}>
                <Text  >{item.text}</Text>
              </View>

            )}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type message ...."
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
          <TouchableOpacity onPress={handleSendMessage}>
            <Ionicons name="chevron-forward" size={50} color="#53E559" />
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    backgroundColor: GREEN_COLORS.GREEN,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: 200
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  input: {
    flex: 1,
    height: 53,
    backgroundColor: WHITE_COLORS.WHITE,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  background: {
    flex: 1,
    // justifyContent: 'center',
  },
});

export default ChatScreen;
