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
  return <SafeAreaView style={_styles.NnXNyfUy}>
      <TextInput placeholder="Search" style={_styles.VWPLzzDv} />
      <View style={_styles.HqPtMPWm}>
        <Picker style={_styles.tVBSsnio}>
          <Picker.Item label="Day" value="day" />
          <Picker.Item label="Category" value="category" />
        </Picker>
        <Button title="View Goals" onPress={() => {}} />
      </View>
      <FlatList data={DATA} renderItem={({
      item
    }) => <View style={_styles.CDSawmuT}>
            <Text>{item.doctorRecommendation}</Text>
            <Text>{item.scheduledTreatment}</Text>
            <Button title="Accept" onPress={() => {}} />
          </View>} keyExtractor={item => item.id} />
      <View style={_styles.bdWXoreN}>
        <Button title="Add Document" onPress={() => {}} />
        <Picker style={_styles.tzGBYAzY}>
          <Picker.Item label="Category" value="category" />
        </Picker>
      </View>
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  NnXNyfUy: {
    flex: 1,
    backgroundColor: "#fff"
  },
  VWPLzzDv: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  HqPtMPWm: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tVBSsnio: {
    width: 150
  },
  CDSawmuT: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  bdWXoreN: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  tzGBYAzY: {
    width: 150
  }
});