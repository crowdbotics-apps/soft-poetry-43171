import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';

const DiagnosisScreen = () => {
  const [diagnosis, setDiagnosis] = useState('');
  const [diagnoses, setDiagnoses] = useState([]);

  const addDiagnosis = () => {
    setDiagnoses([...diagnoses, diagnosis]);
    setDiagnosis('');
  };

  const removeDiagnosis = index => {
    setDiagnoses(diagnoses.filter((_, i) => i !== index));
  };

  return <SafeAreaView style={_styles.zCnsarSW}>
      <View style={_styles.tDRnUVUC}>
        <TextInput style={_styles.wnVkBhYO} onChangeText={text => setDiagnosis(text)} value={diagnosis} placeholder="Enter diagnosis" />
        <Button onPress={addDiagnosis} title="Add" color="#841584" />
        <FlatList data={diagnoses} keyExtractor={(item, index) => index.toString()} renderItem={({
        item,
        index
      }) => <View style={_styles.bjDEqBzp}>
              <Text>{item}</Text>
              <TouchableOpacity onPress={() => removeDiagnosis(index)}>
                <Text style={_styles.FKFCvrsP}>Remove</Text>
              </TouchableOpacity>
            </View>} />
      </View>
    </SafeAreaView>;
};

export default DiagnosisScreen;

const _styles = StyleSheet.create({
  zCnsarSW: {
    flex: 1,
    backgroundColor: "#fff"
  },
  tDRnUVUC: {
    padding: 20
  },
  wnVkBhYO: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10
  },
  bjDEqBzp: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  FKFCvrsP: {
    color: "red"
  }
});