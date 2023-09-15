import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const articles = [{
  id: '1',
  date: '2021-09-01',
  title: 'Article 1',
  category: 'Tech',
  content: 'This is a tech article.'
}, {
  id: '2',
  date: '2021-09-02',
  title: 'Article 2',
  category: 'Health',
  content: 'This is a health article.'
}, {
  id: '3',
  date: '2021-09-03',
  title: 'Article 3',
  category: 'Finance',
  content: 'This is a finance article.'
} // Add more articles as needed
];

const ArticleScreen = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={articles} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <Text style={styles.content}>{item.content}</Text>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  date: {
    fontSize: 12,
    color: '#888'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  },
  category: {
    fontSize: 14,
    color: '#888'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 10
  },
  content: {
    fontSize: 14
  }
});
export default ArticleScreen;