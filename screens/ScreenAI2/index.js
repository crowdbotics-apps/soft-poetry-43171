import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>LOGO</Text>
      </View>
      <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder="Username" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <View style={styles.buttonContainer}>
        <Button title="Log In" onPress={() => {}} />
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.signup}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 48
  },
  logo: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333'
  },
  input: {
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8
  },
  buttonContainer: {
    marginBottom: 16
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#007BFF',
    marginBottom: 16
  },
  signup: {
    textAlign: 'center',
    color: '#007BFF'
  }
});
export default LoginScreen;