import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentScreen = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const cards = [{
    id: 1,
    name: 'Visa',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 2,
    name: 'MasterCard',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 3,
    name: 'American Express',
    image: 'https://tinyurl.com/42evm3m3'
  }];
  const amount = 100;
  return <SafeAreaView style={styles.container}>
      <Text style={styles.amountText}>Amount: ${amount}</Text>
      <Text style={styles.selectCardText}>Select a card</Text>
      <View style={styles.cardsContainer}>
        {cards.map(card => <TouchableOpacity key={card.id} onPress={() => setSelectedCard(card.id)}>
            <Image source={{
          uri: card.image
        }} style={styles.cardImage} />
            <Text style={styles.cardName}>{card.name}</Text>
          </TouchableOpacity>)}
      </View>
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  selectCardText: {
    fontSize: 18,
    marginBottom: 10
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  cardImage: {
    width: 100,
    height: 60,
    resizeMode: 'contain'
  },
  cardName: {
    textAlign: 'center',
    fontSize: 16
  },
  payButton: {
    backgroundColor: '#4B9CE2',
    padding: 15,
    borderRadius: 5
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center'
  }
});
export default PaymentScreen;