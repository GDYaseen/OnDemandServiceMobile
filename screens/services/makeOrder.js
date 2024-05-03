import { StyleSheet, Text, View,Button } from "react-native";
import { palette } from "../config";
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
export default function MakeOrder({service}){
    const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
    return(
        <View>
            {/* <View style={styles.detail}><Text style={styles.detail.title}>Id Card:</Text>
                    <Text style={styles.detail.value}>NE4232832</Text>
                    </View> */}
                    <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
        </View>
    )
}

const styles = StyleSheet.create({
    detail:{
        
        backgroundColor:'red',
        
        title:{
            fontFamily:'Raleway-Regular',
            color:palette.dark
        },
        value:{
            fontFamily:'Montserrat-Light',
            color:palette.primary
        }
      }
})