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

  return <SafeAreaView style={_styles.nMmIgeeF}>
      <View style={_styles.dojqSmOi}>
        <TextInput style={_styles.WbsyQkrp} onChangeText={text => setDiagnosis(text)} value={diagnosis} placeholder="Enter diagnosis" />
        <Button onPress={addDiagnosis} title="Add" color="#841584" />
        <FlatList data={diagnoses} keyExtractor={(item, index) => index.toString()} renderItem={({
        item,
        index
      }) => <View style={_styles.OCPgGsug}>
              <Text>{item}</Text>
              <TouchableOpacity onPress={() => removeDiagnosis(index)}>
                <Text style={_styles.dAnbyNzN}>Remove</Text>
              </TouchableOpacity>
            </View>} />
      </View>
    </SafeAreaView>;
};

export default DiagnosisScreen;

const _styles = StyleSheet.create({
  nMmIgeeF: {
    flex: 1,
    backgroundColor: "#fff"
  },
  dojqSmOi: {
    padding: 20
  },
  WbsyQkrp: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10
  },
  OCPgGsug: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  dAnbyNzN: {
    color: "red"
  }
});