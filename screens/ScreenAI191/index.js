import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, Picker } from 'react-native';
const DATA = [{
  id: '1',
  doctorRecommendation: 'Take 2 pills daily',
  scheduledTreatment: 'Physical Therapy'
}, {
  id: '2',
  doctorRecommendation: 'Drink plenty of water',
  scheduledTreatment: 'Dialysis'
}];

const App = () => {
  return <SafeAreaView style={_styles.pNigEwyt}>
      <TextInput placeholder="Search" style={_styles.ZRmiUPbt} />
      <View style={_styles.bjgmIRgi}>
        <Picker style={_styles.BUtLqjbj}>
          <Picker.Item label="Day" value="day" />
          <Picker.Item label="Category" value="category" />
        </Picker>
        <Button title="View Goals" onPress={() => {}} />
      </View>
      <FlatList data={DATA} renderItem={({
      item
    }) => <View style={_styles.kAOkhimq}>
            <Text>{item.doctorRecommendation}</Text>
            <Text>{item.scheduledTreatment}</Text>
            <Button title="Accept" onPress={() => {}} />
          </View>} keyExtractor={item => item.id} />
      <View style={_styles.SMjFAhKv}>
        <Button title="Add Document" onPress={() => {}} />
        <Picker style={_styles.disrVCpN}>
          <Picker.Item label="Category" value="category" />
        </Picker>
      </View>
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  pNigEwyt: {
    flex: 1,
    backgroundColor: "#fff"
  },
  ZRmiUPbt: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  bjgmIRgi: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  BUtLqjbj: {
    width: 150
  },
  kAOkhimq: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  SMjFAhKv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  disrVCpN: {
    width: 150
  }
});