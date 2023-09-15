import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet, FlatList } from 'react-native';
const data = [{
  id: '1',
  title: 'Program 1'
}, {
  id: '2',
  title: 'Program 2'
}, {
  id: '3',
  title: 'Program 3'
}];

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Wellness App</Text>
      </View>
      <Button title="Knowledge base" />
      <Button title="Exercise programs" />
      <FlatList data={data} renderItem={({
      item
    }) => <View style={styles.item}>
            <Text>{item.title}</Text>
            <Button title="Schedule" />
          </View>} keyExtractor={item => item.id} />
      <Button title="Nutritional programs" />
      <Button title="Wellness programs" />
      <FlatList data={data} renderItem={({
      item
    }) => <View style={styles.item}>
            <Text>{item.title}</Text>
            <Button title="Schedule" />
          </View>} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});
export default Screen;