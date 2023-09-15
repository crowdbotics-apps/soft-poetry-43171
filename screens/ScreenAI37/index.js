import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, Text, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');
  const senderEmail = 'sender@example.com';

  const handleSend = () => {
    alert(`Feedback sent: ${feedback}`);
    setFeedback('');
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emailText}>{senderEmail}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Your feedback" value={feedback} onChangeText={setFeedback} multiline />
        <Button title="Send" onPress={handleSend} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  header: {
    marginBottom: 20
  },
  emailText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  inputContainer: {
    flex: 1
  },
  input: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  }
});
export default FeedbackScreen;