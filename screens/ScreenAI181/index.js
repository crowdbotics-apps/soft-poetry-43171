import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, FlatList, Text, TouchableOpacity, Picker } from 'react-native';

const MedicationScreen = () => {
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [unit, setUnit] = useState('mg');
  const [medications, setMedications] = useState([]);

  const addMedication = () => {
    setMedications([...medications, {
      name: medication,
      dosage: dosage,
      unit: unit
    }]);
    setMedication('');
    setDosage('');
  };

  const removeMedication = index => {
    setMedications(medications.filter((_, i) => i !== index));
  };

  return <SafeAreaView style={_styles.JTdOqEiS}>
      <TextInput style={_styles.wyClgADg} onChangeText={text => setMedication(text)} value={medication} placeholder="Medication" />
      <TextInput style={_styles.IIGXLjHC} onChangeText={text => setDosage(text)} value={dosage} placeholder="Dosage" keyboardType="numeric" />
      <Picker selectedValue={unit} style={_styles.XRKVXPLu} onValueChange={(itemValue, itemIndex) => setUnit(itemValue)}>
        <Picker.Item label="mg" value="mg" />
        <Picker.Item label="g" value="g" />
        <Picker.Item label="ml" value="ml" />
      </Picker>
      <Button title="Add" onPress={addMedication} />
      <FlatList data={medications} keyExtractor={(item, index) => index.toString()} renderItem={({
      item,
      index
    }) => <View style={_styles.DiomxOQO}>
            <Text>{item.name} - {item.dosage} {item.unit}</Text>
            <TouchableOpacity onPress={() => removeMedication(index)}>
              <Text style={_styles.XBWCoods}>Remove</Text>
            </TouchableOpacity>
          </View>} />
    </SafeAreaView>;
};

export default MedicationScreen;

const _styles = StyleSheet.create({
  JTdOqEiS: {
    flex: 1,
    padding: 20
  },
  wyClgADg: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10
  },
  IIGXLjHC: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10
  },
  XRKVXPLu: {
    height: 50,
    width: 100
  },
  DiomxOQO: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  XBWCoods: {
    color: "red"
  }
});