import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Health App</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Diagnoses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI18");
      }}>
          <Text style={styles.buttonText}>Medications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI19");
      }}>
          <Text style={styles.buttonText}>Test Results</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI20");
      }}>
          <Text style={styles.buttonText}>Vaccines</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI21");
      }}>
          <Text style={styles.buttonText}>Supplements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI22");
      }}>
          <Text style={styles.buttonText}>Care Plan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI27");
      }}>
          <Text style={styles.buttonText}>Ask a Question</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    padding: 20
  },
  button: {
    backgroundColor: '#4b9ed6',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
});
export default App;