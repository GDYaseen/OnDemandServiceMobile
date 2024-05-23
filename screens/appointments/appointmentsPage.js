import {SafeAreaView, StyleSheet, TextInput, Text, View, ScrollView, Image, TouchableOpacity, Platform, Animated} from "react-native";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Calendar } from "react-native-calendars";
import { callApi, convertDateFormat, palette, windowHeightPx, windowWidthPx } from "../config";
import Appointment from "./appointment";
import AppointmentPopup from "./appointmentPopup";
import Contexter from "../contexter";
import Loading from "../components/loading";

export default function AppointmentsPage({navigation,bottomBar,bottomContent,}) {
  const context = useContext(Contexter)
  const [markedDates, setMarkedDates] = useState(null);
  const [selectedDate,setSelectedDate] = useState(null)
  const [orders,setOrders] = useState([])

  const handleAppointmentPress = (day,ap) => {
    if (markedDates[selectedDate.dateString]) {
      bottomBar(true);
      bottomContent({
        height: 290,
        components: <AppointmentPopup cancelAction={()=>bottomBar(false)} appointment={ap} />,
      });
    } else {
      bottomBar(false);
    }
  };

  useEffect(()=>{
    async function getOrders() {
      try {
          const response = await callApi(`/${context.userType}/orders`,"get",{},{Authorization: `Bearer ${context.token}`})
          if(response.status==200) {
                setOrders(response.data.orders)
                setMarkedDates(()=>createMarkedDates(orders.filter((o)=>o.status=="pending"||o.status=="accepted").map((o)=>convertDateFormat(o.date))))
                alert(JSON.stringify(markedDates))
          }
          else {alert("Couldn't get orders")}
        } 
        catch (error) {
          console.log('Failed to fetch data',error);
        }
  }
  getOrders();
  },[])
  console.log("selecteddate is ",selectedDate)
  return markedDates?(
  // return(
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
        {orders&&markedDates&&selectedDate?
      orders.filter((o)=>selectedDate.dateString==convertDateFormat(o.date)).map((d) => {
        return <Appointment handlePress={()=>handleAppointmentPress(selectedDate,d)} appointment={d} key={d.key} />;
      })
      :
      <Text style={styles.appointments.selectDate}>Please select a date</Text>
      }

      </ScrollView>
    </View>
      ):(<Loading.LoadingSpinner></Loading.LoadingSpinner>
    )
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

const dateString = `${today.getFullYear()}-${(
  "0" +
  (today.getMonth() + 1)
).slice(-2)}-${("0" + today.getDate()).slice(-2)}`;

const createMarkedDates = (dates) => {
  const marks = {};
  dates.forEach((date) => {
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
