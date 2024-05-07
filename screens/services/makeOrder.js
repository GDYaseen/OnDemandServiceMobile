import {StyleSheet, Text, View,Button ,TouchableOpacity,TextInput} from "react-native";
import { palette } from "../config";
import React, { useState } from 'react';
import { CheckBox } from "react-native-btr";

export default function MakeOrder({service}){
    const [date, setDate] = useState(null)
  const [open, setOpen] = useState(false)
  const [isUrgent, setUrgent] = useState(false);
  const [paymentMethod,setPaymentMethod] = useState(null)
    return(
        <View>
            <View style={styles.detail}><Text style={styles.detail.title}>Date:</Text>
                    <TouchableOpacity onPress={() => setOpen(true)} >

                      <Text style={styles.detail.value}>{date?date.toISOString():"Select Date"}</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.detail}><Text style={styles.detail.title}>Is it urgent?</Text>
            <View style={{width:20,height:20}}>
            <CheckBox checked={isUrgent} color={palette.primary} disabled={false} onPress={() => setUrgent(!isUrgent)}/>
              </View></View>
            
            <View style={styles.detail}><Text style={styles.detail.title}>Address:</Text>
              <TextInput style={styles.detail.input}>7da station N°:23, Essaouira</TextInput></View>
            <View>
            <Text style={styles.detail.title}>Payment Method:</Text>
            <View style={styles.detail}>
            <TouchableOpacity style={[styles.detail.paymentMethod,{backgroundColor:paymentMethod=="Instantly"?palette.primary:'white'}]} 
                  onPress={() => setPaymentMethod("Instantly")} >
              <Text style={{fontFamily:'Montserrat-Regular',
                  color:paymentMethod=="Instantly"?'white':palette.primary}}>Instantly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.detail.paymentMethod,{backgroundColor:paymentMethod=="On arrival"?palette.primary:'white'}]} 
                  onPress={() => setPaymentMethod("On arrival")} >
              <Text style={{fontFamily:'Montserrat-Regular',
                  color:paymentMethod=="On arrival"?'white':palette.primary}}>On arrival</Text>
            </TouchableOpacity>
              </View>
            </View>
            
            <View >
            <Text style={styles.detail.title}>Instructions:</Text>
            <TextInput multiline={true} style={styles.detail.instruction} value={lorem} />
            </View>
            <TouchableOpacity style={styles.detail.hireButton}>
              <Text style={styles.detail.hireButton.text}>Confirm</Text></TouchableOpacity>
      {/* <DatePicker
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
      />*/}
        </View>
    )
}
const lorem="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const styles = StyleSheet.create({
    detail:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
        paymentMethod:{
          padding:5,
          borderWidth:1,
          borderRadius:5,
          borderColor:palette.primary,
          width:'45%',
          alignItems:'center'
        },
        hireButton:{
          text:{
            color:'white',
            fontSize:17,
            fontFamily:'Montserrat-Regular'
          },
          backgroundColor:palette.secondary,
          height:40,
          borderRadius:5,
          justifyContent:'center',alignItems:'center',
          marginTop:15,
          marginBottom:10
        },
        instruction:{
          paddingLeft:5,
          paddingRight:5,
          textAlign:'justify',
          height:100,
          fontSize:12,
          backgroundColor:'white',
          borderColor:palette.primary,
          fontFamily:'Montserrat-Light',
          borderRadius:5,
          borderWidth:1,
        },
        title:{
            fontFamily:'Raleway-Regular',
            color:palette.bright
        },
        value:{
            fontFamily:'Montserrat-Light',
            color:palette.primary,
            textDecorationLine:'underline'
        },
        input:{
          marginLeft:10,
          fontFamily:'Montserrat-Light',
          // color:palette.primary,
          backgroundColor:'white',
          flex:1,
          paddingLeft:5,
          paddingRight:5,
          // fontSize:14,
          borderColor:palette.primary,
          borderRadius:5,
          borderWidth:1,
      },
      },
      checkbox: {
        alignSelf: 'center',
      },
})