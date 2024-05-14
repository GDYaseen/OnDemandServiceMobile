import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';
import { useFonts } from 'expo-font';

import {commonStyles,palette} from '../config';
import placeholderImage from '../../assets/images/placeholderImage.png'
export default function Appointment({handlePress,appointment}){
    
    return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
        <Image resizeMode='contain' style={styles.preview} source={appointment.image?appointment.image:placeholderImage}></Image>
        <View style={{flex:1,paddingLeft:10}}>
            <Text style={styles.category}>{appointment.category}</Text>
            <Text numberOfLines={2} style={styles.title}>{appointment.title}</Text>
            <Text style={styles.time}>{appointment.time}</Text>
            <Text style={styles.seller}>{appointment.provider}</Text>
            <Text style={styles.price}>{appointment.price} DH</Text> 
        </View>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        // width:'90%',
        height:90,
        // marginLeft:15,
        // marginRight:15,
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
        // fontFamily:'Montserrat-Light'
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