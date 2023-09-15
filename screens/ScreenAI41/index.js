import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet, View } from 'react-native';

const PromoCodeScreen = () => {
  const [promoCode, setPromoCode] = useState('');

  const handlePromoCodeSubmit = () => {
    alert(`Promo Code: ${promoCode}`);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter Promo Code" value={promoCode} onChangeText={setPromoCode} />
        <Button title="Submit" onPress={handlePromoCodeSubmit} />
      </View>
      <Button title="Back" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5'
  },
  inputContainer: {
    marginBottom: 16
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8
  }
});
export default PromoCodeScreen;