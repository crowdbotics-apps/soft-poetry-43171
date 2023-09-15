import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("ScreenAI34");
        }}>
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("ScreenAI9");
        }}>
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("ScreenAI33");
        }}>
            <Text style={styles.buttonText}>Notification</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Appointments</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Medical section</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Wellness</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10
  },
  button: {
    width: "100%",
    backgroundColor: "#4b0082",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  }
});
export default ScreenComponent;