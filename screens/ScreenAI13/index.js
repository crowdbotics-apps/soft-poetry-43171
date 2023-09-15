import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SubscriptionScreen = () => {
  const tiers = [{
    id: 1,
    name: 'Basic',
    price: '$5/month'
  }, {
    id: 2,
    name: 'Premium',
    price: '$10/month'
  }, {
    id: 3,
    name: 'Ultimate',
    price: '$20/month'
  }];
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose Your Subscription</Text>
      {tiers.map(tier => <TouchableOpacity key={tier.id} style={styles.tierContainer}>
          <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
          <View style={styles.tierInfo}>
            <Text style={styles.tierName}>{tier.name}</Text>
            <Text style={styles.tierPrice}>{tier.price}</Text>
          </View>
        </TouchableOpacity>)}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  tierContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20
  },
  tierInfo: {
    flexDirection: 'column'
  },
  tierName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  tierPrice: {
    fontSize: 16,
    color: '#888'
  }
});
export default SubscriptionScreen;