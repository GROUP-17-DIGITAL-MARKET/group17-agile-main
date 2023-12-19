import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() === '') {
      return; // Don't send empty messages
    }

    const newMessage = { text: inputText, id: messages.length.toString() };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.messageContainer}>
              <Text>{item.text}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
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
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ChatScreen;
