import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, ProgressBarAndroid, Picker, StyleSheet } from 'react-native';
const goalsData = [{
  id: '1',
  goal: 'Read a book',
  dueDate: '2021-12-31',
  priority: 'High',
  category: 'Personal',
  status: 'In Progress',
  progress: 0.5
}, {
  id: '2',
  goal: 'Run 5km',
  dueDate: '2022-01-31',
  priority: 'Medium',
  category: 'Health',
  status: 'Not Started',
  progress: 0
}, {
  id: '3',
  goal: 'Learn React Native',
  dueDate: '2022-02-28',
  priority: 'High',
  category: 'Career',
  status: 'In Progress',
  progress: 0.2
}];

const GoalScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Picker style={styles.picker}>
        <Picker.Item label="Weekly" value="weekly" />
        <Picker.Item label="Monthly" value="monthly" />
        <Picker.Item label="Yearly" value="yearly" />
      </Picker>
      <FlatList data={goalsData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.goalItem}>
            <Text style={styles.goalText}>{item.goal}</Text>
            <Text style={styles.goalDetails}>Due: {item.dueDate} | Priority: {item.priority} | Category: {item.category} | Status: {item.status}</Text>
            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={item.progress} />
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: '100%',
    height: 200
  },
  picker: {
    margin: 10
  },
  goalItem: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  goalText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  goalDetails: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10
  }
});
export default GoalScreen;