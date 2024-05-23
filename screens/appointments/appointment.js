import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef, useContext} from 'react';
import { useFonts } from 'expo-font';

import {commonStyles,palette} from '../config';
import placeholderImage from '../../assets/images/placeholderImage.png'
import Contexter from '../contexter';
export default function Appointment({handlePress,appointment}){
    const context = useContext(Contexter)
    return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
        <Image resizeMode='contain' style={styles.preview} source={appointment.service?.images[0]?appointment.service?.images[0]:placeholderImage}></Image>
        <View style={{flex:1,paddingLeft:10}}>
            <Text style={styles.category}>{appointment.service.category}</Text>
            <Text numberOfLines={2} style={styles.title}>{appointment.service.name}</Text>
            <Text style={styles.time}>{appointment.date.split(" ")[1]}</Text>
            <Text style={styles.seller}>{context.userType=="provider"?appointment.client.first_name+" "+appointment.client.last_name:appointment.provider.first_name+" "+appointment.provider.last_name}</Text>
            <Text style={styles.price}>{appointment.service.price} DH</Text> 
            {appointment.is_urgent?<Text style={styles.urgentBanner}>Urgent</Text>:null}
        </View>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:90,
        margin:10,
        flexDirection:'row',
        borderRadius:10,
        overflow:'hidden',
        borderColor:palette.dark,
        borderWidth:1
    },
    preview:{
        width:'40%',
        height:'100%',
        backgroundColor:'#f4f4f4'
    },
    category:{
        color:palette.dark+'3f',
        fontFamily:'Montserrat-Light',
        fontSize:12
    },
    title:{
        fontSize:14,
    },
    urgentBanner:{
        position:'absolute',
        bottom:0,
        right:20,
        backgroundColor:'#ee4444',
        width:50,
        textAlign:'center',
        color:"white",
        fontFamily:'Raleway-Medium',
        fontSize:13,
        paddingBottom:3,
        borderTopLeftRadius:7,
        borderTopRightRadius:7,
    },
    seller:{
        fontSize:14,
        fontFamily:'Montserrat-Light',
        color:palette.primary
    },
    time:{
        position:"absolute",
        top:5,
        right:10,
        fontFamily:'Montserrat-Light',
        fontSize:10
    },
    price:{
        position:'absolute',
        bottom:5,
        left:10,
        fontSize:15,
        color:palette.dark,
        fontFamily:'Montserrat-Thin'
    },
    hireButton:{
        width:100,
        height:30,
        right:0,
        position:'absolute',
        bottom:0,
        backgroundColor:palette.secondary,
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:5
    },
})