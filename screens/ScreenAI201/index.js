import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

const VaccineScreen = () => {
  const [vaccine, setVaccine] = useState('');
  const [vaccineList, setVaccineList] = useState([]);

  const addVaccine = () => {
    setVaccineList([...vaccineList, vaccine]);
    setVaccine('');
  };

  const removeVaccine = index => {
    const newVaccineList = [...vaccineList];
    newVaccineList.splice(index, 1);
    setVaccineList(newVaccineList);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={vaccine} onChangeText={setVaccine} placeholder="Enter Vaccine" />
        <Button title="Add" onPress={addVaccine} />
      </View>
      <FlatList data={vaccineList} keyExtractor={(item, index) => index.toString()} renderItem={({
      item,
      index
    }) => <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item}</Text>
            <TouchableOpacity onPress={() => removeVaccine(index)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  input: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 5,
    padding: 10
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5
  },
  listItemText: {
    fontSize: 16
  },
  removeButton: {
    color: 'red'
  }
});
export default VaccineScreen;