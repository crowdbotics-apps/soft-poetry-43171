import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, Picker, TouchableOpacity } from 'react-native';

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState(new Date());
  return <SafeAreaView style={_styles.NAKzHRYC}>
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI10");
    }}><Image style={_styles.SJFTpiol} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} /></Pressable>
      <TextInput style={_styles.RRKSOhNl} onChangeText={text => setName(text)} value={name} placeholder="Name" />
      <TextInput style={_styles.kxYRIWAn} onChangeText={text => setAddress(text)} value={address} placeholder="Address" />
      <Picker selectedValue={weight} style={_styles.hNDxjdKX} onValueChange={(itemValue, itemIndex) => setWeight(itemValue)}>
        <Picker.Item label="50" value="50" />
        <Picker.Item label="60" value="60" />
      </Picker>
      <Picker selectedValue={height} style={_styles.LRmkPQmZ} onValueChange={(itemValue, itemIndex) => setHeight(itemValue)}>
        <Picker.Item label="160" value="160" />
        <Picker.Item label="170" value="170" />
      </Picker>
      <View style={_styles.tYREcLvg}>
        <TouchableOpacity onPress={() => setGender('Male')}>
          <Text style={{
          fontSize: 18,
          color: gender === 'Male' ? 'blue' : 'black'
        }}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
        navigation.navigate("ScreenAI13");
      }}>
          <Text style={{
          fontSize: 18,
          color: gender === 'Female' ? 'blue' : 'black'
        }}>Female</Text>
        </TouchableOpacity>
      </View>
      <Button title="Select Date" onPress={() => setDate(new Date())} />
      <Text>{date.toDateString()}</Text>
      <Button title="Next" onPress={() => console.log('Next')} />
    </SafeAreaView>;
};

export default UserProfileScreen;

const _styles = StyleSheet.create({
  NAKzHRYC: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  SJFTpiol: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  RRKSOhNl: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  kxYRIWAn: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  hNDxjdKX: {
    height: 50,
    width: 100
  },
  LRmkPQmZ: {
    height: 50,
    width: 100
  },
  tYREcLvg: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});