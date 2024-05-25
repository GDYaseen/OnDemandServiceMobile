import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef, useContext} from 'react';

import {commonStyles,palette} from '../config';
import profilePng from '../../assets/images/account.png'
import Contexter from '../contexter';
export default function OrderPopup({order}){
    const context = useContext(Contexter)
    return (
    <View style={styles.container}>
            <Text numberOfLines={3} style={styles.title}>{order.service.name}</Text>
            <View style={styles.profile}>
                <Text style={styles.profile.sellerName}>{context.userType=="provider"?"By:":"To:"}</Text>
                <Image source={order.providerImage?order.providerImage:profilePng} 
                    style={styles.profile.image} />
                <Text style={styles.profile.sellerName}>{context.userType=="provider"?order.client.first_name+" "+order.client.last_name:order.provider.first_name+" "+order.provider.last_name}</Text>
            </View>
            <View style={styles.details}>
                <View style={styles.details.row}>
                    <Text style={styles.details.paymentMethod}>Payment Method:</Text>
                    <Text style={styles.details.paymentMethod}>{order.payment_method}</Text>
                </View>
                <View style={styles.details.row}>
                    <Text style={styles.details.time}>Time:</Text>
                    <Text style={styles.details.time}>{order.date}</Text>
                </View>
                <View style={styles.details.row}>
                    <Text style={styles.details.price}>Price:</Text> 
                    <Text style={styles.details.price}>{order.service.price} DH</Text> 
                </View>
            </View>
                {
                    context.userType=="client"&&order.status=="completed"&&order.status!="canceled"&&order.feedback!=null?
                    (
            <View style={{alignItems:'center',paddingTop:10}} >
                <TextInput multiline={true} style={styles.feedback} />
                    <TouchableOpacity style={[styles.button,{backgroundColor:palette.primary}]}><Text 
                        style={{color:'white',fontFamily:'Raleway-Regular'}}>Send a review</Text></TouchableOpacity>
            </View>
                    )
                        :
                        null
                }
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:300,
        // marginLeft:15,
        // marginRight:15,
        margin:10,
        overflow:'hidden',
    },
    feedback:{
        paddingLeft:5,
    width:'95%',
          paddingRight:5,
          marginBottom:10,
          textAlign:'justify',
          height:60,
          fontSize:12,
          backgroundColor:'white',
          borderColor:palette.primary,
          fontFamily:'Montserrat-Light',
          borderRadius:5,
          borderWidth:1,
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
        marginBottom:10,
        height:100,
        backgroundColor:palette.primary,
        justifyContent:'space-between',
        row:{
            flexDirection:'row',
            justifyContent:'space-between',
        },
        paymentMethod:{
            color:'white',
            fontFamily:'Montserrat-Medium',
            fontSize:14,
        },
        time:{
            color:'white',
            fontFamily:'Montserrat-Regular',
            fontSize:14,
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