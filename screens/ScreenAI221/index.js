import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const DoctorScreen = () => {
  const [notes, setNotes] = useState('');
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Doctor's Recommendations</Text>
      </View>
      <View style={styles.recommendations}>
        <Text style={styles.text}>Exercise daily for 30 minutes</Text>
        <Text style={styles.text}>Eat a balanced diet</Text>
        <Text style={styles.text}>Get 8 hours of sleep</Text>
      </View>
      <View style={styles.trackButton}>
        <Button title="Track" onPress={() => {}} />
      </View>
      <View style={styles.notes}>
        <Text style={styles.notesTitle}>Your Notes</Text>
        <TextInput style={styles.input} onChangeText={setNotes} value={notes} placeholder="Input activities here..." multiline />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  recommendations: {
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  trackButton: {
    marginBottom: 20
  },
  notes: {
    flex: 1
  },
  notesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 16,
    borderRadius: 6
  }
});
export default DoctorScreen;