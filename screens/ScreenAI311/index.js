import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const nutritionalPrograms = [{
  id: '1',
  title: 'Program 1',
  description: 'This is nutritional program 1'
}, {
  id: '2',
  title: 'Program 2',
  description: 'This is nutritional program 2'
}, {
  id: '3',
  title: 'Program 3',
  description: 'This is nutritional program 3'
} // Add more programs as needed
];

const ProgramItem = ({
  title,
  description
}) => <View style={styles.itemContainer}>
    <Image style={styles.image} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>;

const NutritionalProgramsScreen = () => <SafeAreaView style={styles.container}>
    <FlatList data={nutritionalPrograms} keyExtractor={item => item.id} renderItem={({
    item
  }) => <ProgramItem title={item.title} description={item.description} />} />
  </SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textContainer: {
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    color: '#888'
  }
});
export default NutritionalProgramsScreen;