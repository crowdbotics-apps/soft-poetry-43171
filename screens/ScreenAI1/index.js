import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, StatusBar } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI2");
      }}><Image style={styles.logo} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} /></Pressable>
        <Text style={styles.title}>Welcome to Our App</Text>
        <Text style={styles.subtitle}>We're preparing things for you</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#333'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666',
    marginTop: 10
  }
});
export default SplashScreen;