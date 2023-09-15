import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Button, StyleSheet } from 'react-native';
const wellnessPrograms = [{
  id: '1',
  title: 'Yoga for Beginners',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  title: 'Advanced Meditation',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '3',
  title: 'Nutrition and Diet',
  image: 'https://tinyurl.com/42evm3m3'
} // Add more programs as needed
];

const ProgramItem = ({
  title,
  image
}) => <View style={styles.itemContainer}>
    <Image source={{
    uri: image
  }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Button title="Schedule" onPress={() => {}} />
  </View>;

const WellnessProgramsScreen = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={wellnessPrograms} keyExtractor={item => item.id} renderItem={({
      item
    }) => <ProgramItem title={item.title} image={item.image} />} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#333333'
  }
});
export default WellnessProgramsScreen;