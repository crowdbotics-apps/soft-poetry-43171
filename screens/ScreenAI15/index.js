import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet, View } from 'react-native';

const CreditCardScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={setCardNumber} value={cardNumber} placeholder="Card Number" keyboardType="numeric" />
      <TextInput style={styles.input} onChangeText={setCvv} value={cvv} placeholder="CVV" keyboardType="numeric" maxLength={3} />
      <TextInput style={styles.input} onChangeText={setCardHolderName} value={cardHolderName} placeholder="Card Holder Name" />
      <View style={styles.buttonContainer}>
        <Button title="Create" onPress={() => {}} />
        <Button title="Edit" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default CreditCardScreen;