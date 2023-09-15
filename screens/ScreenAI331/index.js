import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const notifications = [{
  id: '1',
  title: 'Notification 1',
  time: '2 mins ago'
}, {
  id: '2',
  title: 'Notification 2',
  time: '10 mins ago'
}, {
  id: '3',
  title: 'Notification 3',
  time: '1 hour ago'
} // Add more notifications as needed
];

const NotificationScreen = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={notifications} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.notificationCard}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  notificationCard: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5
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
    fontSize: 16,
    fontWeight: 'bold'
  },
  time: {
    fontSize: 14,
    color: '#888'
  }
});
export default NotificationScreen;