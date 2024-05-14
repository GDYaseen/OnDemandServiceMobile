import {SafeAreaView, StyleSheet, TextInput, Text, View, ScrollView, Image, TouchableOpacity, Platform, Animated} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Calendar } from "react-native-calendars";
import { palette, windowHeightPx, windowWidthPx } from "../config";
import Appointment from "./appointment";
import AppointmentPopup from "./appointmentPopup";

export default function AppointmentsPage({navigation,bottomBar,bottomContent,}) {
  const [markedDates, setMarkedDates] = useState(createMarkedDates());
  const [selectedDate,setSelectedDate] = useState(null)
  const handleAppointmentPress = (day) => {
    if (appointmentDates.includes(selectedDate.dateString)) {
      bottomBar(true);
      bottomContent({
        height: 290,
        components: <AppointmentPopup cancelAction={()=>bottomBar(false)} appointment={data[0]} />,
      });
    } else {
      bottomBar(false);
    }
  };

  return (
    <View style={{ height: windowHeightPx }}>
      <View style={styles.sectionBar}>
        <Text
          style={{
            marginBottom: 5,color: palette.dark,alignSelf: "center",marginLeft: 5,fontSize: 17,fontFamily: "Montserrat-SemiBold"}}>
          Current Appointments
        </Text>
      </View>
      <Calendar
        theme={calendarTheme}
        firstDay={1}
        onDayPress={setSelectedDate}
        markedDates={{
          [dateString]: { selected: true, selectedColor: palette.secondary },
          ...markedDates,
        }}
      />
      <ScrollView style={{}} contentContainerStyle={styles.appointments}>
        {selectedDate?
      data.map((d) => {
        return <Appointment handlePress={()=>handleAppointmentPress(selectedDate)} appointment={d} key={d.key} />;
      })
      :
      <Text style={styles.appointments.selectDate}>Please select a date</Text>
      }

      </ScrollView>
    </View>
  );
}

let styles = StyleSheet.create({
  sectionBar: {
    alignSelf: "flex-start",
    padding: 10,
    flexDirection: "row",
  },
  appointments: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    paddingBottom: 100,
    selectDate: {
      fontFamily: "Montserrat-Regular",
      fontSize: 17,
      color: palette.dark + "2f",
      marginBottom: 10,
    },
  },
});

const calendarTheme = {
  "stylesheet.day.basic": {
    base: {
      width: 22,
      height: 22,
      alignItems: "center",
    },
    text: {
      marginTop: 4,
      fontSize: 10,
      fontWeight: "300",
    },
  },
};
const today = new Date();
const appointmentDates = [
  "2024-05-16",
  "2024-05-11",
  "2024-05-17",
  "2024-05-20",
  "2024-05-23",
];
const dateString = `${today.getFullYear()}-${(
  "0" +
  (today.getMonth() + 1)
).slice(-2)}-${("0" + today.getDate()).slice(-2)}`;
const createMarkedDates = () => {
  const marks = {};
  appointmentDates.forEach((date) => {
    if (date == dateString) {
      marks[date] = {
        marked: true,
        dotColor: "white",
        selected: true,
        selectedColor: palette.secondary,
      };
    } else marks[date] = { marked: true, dotColor: palette.secondary };
  });
  return marks;
};

const data = [
  {
    key: 10,
    price: 100,
    provider: "Anas",
    providerImage: null,
    time: "14:30",
    title: "Trician Hassan",
    category: "Electricien",
    image: null,
  },
  {
    key: 56,
    provider: "Anas",
    providerImage: null,
    price: 30,
    time: "17:30",
    title: "CarWash",
    category: "Lavage",
    image: null,
  },
  {
    key: 29,
    provider: "Anas",
    providerImage: null,
    price: 20,
    time: "9:30",
    title: "Studio 2019",
    category: "Photographer",
    image: null,
  },
];
