import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Button, StyleSheet } from 'react-native';
const exercisePrograms = [{
  id: '1',
  name: 'Program 1'
}, {
  id: '2',
  name: 'Program 2'
}, {
  id: '3',
  name: 'Program 3'
}, {
  id: '4',
  name: 'Program 4'
}, {
  id: '5',
  name: 'Program 5'
}];

const ExerciseScreen = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={exercisePrograms} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.itemContainer}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <Text style={styles.text}>{item.name}</Text>
            <Button title="Schedule" onPress={() => {}} />
          </View>} />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  text: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16
  }
});
export default ExerciseScreen;