import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput, FlatList } from 'react-native';

const AppointmentsScreen = () => {
  const [appointments, setAppointments] = useState([{
    id: '1',
    title: 'Appointment 1',
    date: '2022-01-01'
  }, {
    id: '2',
    title: 'Appointment 2',
    date: '2022-01-02'
  }, {
    id: '3',
    title: 'Appointment 3',
    date: '2022-01-03'
  }]);
  const [search, setSearch] = useState('');

  const renderAppointment = ({
    item
  }) => <View style={_styles.BimSYSQi}>
      <Text style={_styles.SJguZmvk}>{item.title}</Text>
      <Text style={_styles.XmIqdfkG}>{item.date}</Text>
    </View>;

  return <SafeAreaView style={_styles.UgWXbcYT}>
      <View style={_styles.gAWDyhQa}>
        <Text style={_styles.pWkVOhgB}>Appointments</Text>
        <TextInput style={_styles.UiOhzmlF} onChangeText={text => setSearch(text)} value={search} placeholder="Search appointments" />
        <Button title="Create new appointment" onPress={() => {}} />
        <FlatList data={appointments.filter(appointment => appointment.title.includes(search))} renderItem={renderAppointment} keyExtractor={item => item.id} />
      </View>
    </SafeAreaView>;
};

export default AppointmentsScreen;

const _styles = StyleSheet.create({
  BimSYSQi: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  SJguZmvk: {
    fontSize: 18
  },
  XmIqdfkG: {
    color: "#888"
  },
  UgWXbcYT: {
    flex: 1,
    backgroundColor: "#fff"
  },
  gAWDyhQa: {
    padding: 20
  },
  pWkVOhgB: {
    fontSize: 24,
    fontWeight: "bold"
  },
  UiOhzmlF: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    padding: 10
  }
});