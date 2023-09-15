import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Edit Profile" onPress={() => {}} />
        <Button title="Edit Payment" onPress={() => {}} />
        <Button title="Notifications Settings" onPress={() => {}} />
        <Button title="Privacy Policy" onPress={() => {}} />
        <Button title="Terms and Conditions" onPress={() => {}} />
        <Button title="Change Password" onPress={() => {}} />
        <Button title="Support/ Send Feedback" onPress={() => {}} />
        <Button title="Invite a Friend" onPress={() => {}} />
        <Button title="Delete Account" onPress={() => {}} />
        <Button title="Log Out" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flex: 2,
    width: '80%'
  }
});
export default ScreenComponent;