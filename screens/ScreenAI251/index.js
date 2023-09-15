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
  }) => <View style={_styles.vLkEIVpW}>
      <Text style={_styles.eDtypVuO}>{item.title}</Text>
      <Text style={_styles.fuPuuSIq}>{item.date}</Text>
    </View>;

  return <SafeAreaView style={_styles.DcTgCBnf}>
      <View style={_styles.tZiUyfLE}>
        <Text style={_styles.ZDCuBlgr}>Appointments</Text>
        <TextInput style={_styles.tQnknYcP} onChangeText={text => setSearch(text)} value={search} placeholder="Search appointments" />
        <Button title="Create new appointment" onPress={() => {}} />
        <FlatList data={appointments.filter(appointment => appointment.title.includes(search))} renderItem={renderAppointment} keyExtractor={item => item.id} />
      </View>
    </SafeAreaView>;
};

export default AppointmentsScreen;

const _styles = StyleSheet.create({
  vLkEIVpW: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  eDtypVuO: {
    fontSize: 18
  },
  fuPuuSIq: {
    color: "#888"
  },
  DcTgCBnf: {
    flex: 1,
    backgroundColor: "#fff"
  },
  tZiUyfLE: {
    padding: 20
  },
  ZDCuBlgr: {
    fontSize: 24,
    fontWeight: "bold"
  },
  tQnknYcP: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    padding: 10
  }
});