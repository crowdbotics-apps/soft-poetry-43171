import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, Text, Clipboard, StyleSheet } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const appShareLink = 'https://tinyurl.com/42evm3m3';

  const copyToClipboard = () => {
    Clipboard.setString(appShareLink);
  };

  const sendEmail = () => {// Code to send email
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Enter your email" keyboardType="email-address" />
      </View>
      <View style={styles.linkContainer}>
        <Text style={styles.link}>{appShareLink}</Text>
        <Button title="Copy" onPress={copyToClipboard} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Send" onPress={sendEmail} />
        <Button title="Cancel" onPress={() => setEmail('')} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  link: {
    flex: 1,
    marginRight: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default App;