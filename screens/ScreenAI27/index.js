import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const ChatScreen = () => {
  const [question, setQuestion] = useState('');
  const [conversations, setConversations] = useState([]);

  const handleSend = () => {
    if (question) {
      setConversations([...conversations, {
        user: 'You',
        text: question
      }]);
      setQuestion(''); // Here you would typically send the question to your AI and get the response
      // For the purpose of this example, we'll just echo the question

      setConversations([...conversations, {
        user: 'AI',
        text: question
      }]);
    }
  };

  return <SafeAreaView style={styles.container}>
      <FlatList data={conversations} keyExtractor={(item, index) => index.toString()} renderItem={({
      item
    }) => <View style={styles.message}>
            <Text style={styles.user}>{item.user}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={question} onChangeText={setQuestion} placeholder="Ask something..." />
        <Button title="Send" onPress={handleSend} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  message: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  user: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  text: {
    fontSize: 16
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginRight: 10
  }
});
export default ChatScreen;