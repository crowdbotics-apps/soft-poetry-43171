import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, FlatList, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  const [supplement, setSupplement] = useState('');
  const [dosage, setDosage] = useState('');
  const [unit, setUnit] = useState('mg');
  const [supplementsList, setSupplementsList] = useState([]);

  const addSupplement = () => {
    setSupplementsList([...supplementsList, {
      supplement,
      dosage,
      unit
    }]);
    setSupplement('');
    setDosage('');
  };

  const removeSupplement = index => {
    const newList = [...supplementsList];
    newList.splice(index, 1);
    setSupplementsList(newList);
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} placeholder="Supplement" value={supplement} onChangeText={setSupplement} />
      <TextInput style={styles.input} placeholder="Dosage" value={dosage} onChangeText={setDosage} keyboardType="numeric" />
      <Picker selectedValue={unit} style={styles.picker} onValueChange={itemValue => setUnit(itemValue)}>
        <Picker.Item label="mg" value="mg" />
        <Picker.Item label="g" value="g" />
        <Picker.Item label="mcg" value="mcg" />
      </Picker>
      <Button title="Add" onPress={addSupplement} />
      <FlatList data={supplementsList} keyExtractor={(item, index) => index.toString()} renderItem={({
      item,
      index
    }) => <View style={styles.listItem}>
            <Text>{item.supplement} - {item.dosage} {item.unit}</Text>
            <TouchableOpacity onPress={() => removeSupplement(index)}>
              <Text style={styles.remove}>Remove</Text>
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
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  remove: {
    color: 'red'
  }
});
export default App;