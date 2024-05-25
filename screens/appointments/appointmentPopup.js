import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef, useContext} from 'react';
import { useFonts } from 'expo-font';

import {commonStyles,palette} from '../config';
import placeholderImage from '../../assets/images/placeholderImage.png'
import profilePng from '../../assets/images/account.png'
import Contexter from '../contexter';
export default function AppointmentPopup({cancelAction,appointment}){
    const context = useContext(Contexter)
    return (
    <View style={styles.container}>
            <Text numberOfLines={3} style={styles.title}>{appointment.service.name}</Text>
            <View style={styles.profile}>
                <Image source={profilePng} 
                    style={styles.profile.image} />
                <Text style={styles.profile.sellerName}>{context.userType=="provider"?appointment.client.first_name+" "+appointment.client.last_name:appointment.provider.first_name+" "+appointment.provider.last_name}</Text>
            </View>
            <View style={styles.details}>
            <View style={styles.details.row}>
                    <Text style={styles.details.category}>Category:</Text>
                    <Text style={styles.details.category}>{appointment.service.category}</Text>
                </View>
                <View style={styles.details.row}>
                    <Text style={styles.details.time}>Time:</Text>
                    <Text style={styles.details.time}>{appointment.date}</Text>
                </View>
                <View style={styles.details.row}>
                    <Text style={styles.details.category}>Urgent?:</Text>
                    <Text style={styles.details.category}>{appointment.is_urgent?"Yes":"No"}</Text>
                </View>
                <View style={styles.details.row}>
                    <Text style={styles.details.price}>Price:</Text> 
                    <Text style={styles.details.price}>{appointment.service.price} DH</Text> 
                </View>
            </View>
            <View style={{height:60,flexDirection:'row',justifyContent:'space-evenly',paddingTop:10}} >
                <TouchableOpacity onPress={()=>cancelAction()} style={[styles.button,{width:appointment.status!='pending'||context.userType=="provider"?'45%':'90%',backgroundColor:'#991122'}]}><Text 
                    style={{color:'white',fontFamily:'Raleway-Regular'}}>Cancel order</Text></TouchableOpacity>
                    {context.userType!="client"&&appointment.status=='pending'?

                    (<TouchableOpacity style={[styles.button,{width:'45%',backgroundColor:palette.secondary}]}><Text 
                        style={{color:'white',fontFamily:'Raleway-Regular'}}>Accept order</Text></TouchableOpacity>):null
                }
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
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
})