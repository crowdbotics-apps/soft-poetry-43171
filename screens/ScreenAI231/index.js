import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const UploadScreen = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChooseFile = () => {// Logic to choose file from local storage
  };

  const handleUploadFile = () => {// Logic to upload file
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Upload File</Text>
      </View>
      <View style={styles.content}>
        {selectedFile ? <Image source={{
        uri: selectedFile.uri
      }} style={styles.image} /> : <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />}
        <TouchableOpacity style={styles.button} onPress={handleChooseFile}>
          <Text style={styles.buttonText}>Choose File</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleUploadFile}>
          <Text style={styles.buttonText}>Upload File</Text>
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
    padding: 20,
    backgroundColor: '#6200ee'
  },
  title: {
    fontSize: 24,
    color: '#fff'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});
export default UploadScreen;