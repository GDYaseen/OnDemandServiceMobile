import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';
import { useFonts } from 'expo-font';

import {commonStyles,palette} from '../config';
import placeholderImage from '../../assets/images/placeholderImage.png'
import profilePng from '../../assets/images/account.png'
export default function AppointmentPopup({appointment}){
    
    return (
    <View style={styles.container}>
            <Text numberOfLines={3} style={styles.title}>{appointment.title}</Text>
            <View style={styles.profile}>
                <Image source={appointment.providerImage?appointment.providerImage:profilePng} 
                    style={styles.profile.image} />
                <Text style={styles.profile.sellerName}>appointment.provider</Text>
            </View>
            <View style={styles.details}>
                <View style={styles.details.row}>
                    <Text style={styles.details.category}>Category:</Text>
                    <Text style={styles.details.category}>{appointment.category}</Text>
                </View>
                <View style={styles.details.row}>
                    <Text style={styles.details.time}>Time:</Text>
                    <Text style={styles.details.time}>{appointment.time}</Text>
                </View>
                <View style={styles.details.row}>
                    <Text style={styles.details.price}>Price:</Text> 
                    <Text style={styles.details.price}>{appointment.price} DH</Text> 
                </View>
            </View>
            <View style={{height:60,flexDirection:'row',justifyContent:'space-evenly',paddingTop:10}} >
                <TouchableOpacity style={[styles.button,{backgroundColor:'#552222'}]}><Text 
                    style={{color:'white',fontFamily:'Raleway-Regular'}}>Cancel appointment</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button,{backgroundColor:palette.secondary}]}><Text 
                    style={{color:'white',fontFamily:'Raleway-Regular'}}>See details</Text></TouchableOpacity>
            </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:290,
        // marginLeft:15,
        // marginRight:15,
        margin:10,
        overflow:'hidden',
    },
    profile:{
        flexDirection:'row',
        alignItems:'center',
        image:{
          width:25,
          height:25,
          borderRadius:12,
          margin:5,
          borderColor:palette.primary,
          borderWidth:1
        },
        sellerName:{
          marginLeft:6,
          fontFamily:'Montserrat-Medium',
          fontSize:13,
          color:'black'
        }
      },
    preview:{
        width:'40%',
        height:'100%',
        backgroundColor:'#f4f4f4'
    },
    title:{
        fontSize:20,
        paddingLeft:10,
        paddingRight:10,
        fontFamily:'Montserrat-Light'
    },
    details:{
        padding:10,
        marginTop:0,
        height:110,
        flex:1,
        backgroundColor:palette.dark,
        justifyContent:'space-between',
        row:{
            flexDirection:'row',
            justifyContent:'space-between',
        },
        category:{
            color:'white',
            fontFamily:'Montserrat-Regular',
            fontSize:14,
        },
        time:{
            fontFamily:'Montserrat-Light',
            color:'white',
            fontSize:14
        },
        price:{
            fontSize:15,
            color:'white',
            fontFamily:'Montserrat-Thin'
        },
    },
    button:{
        width:'45%',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
})