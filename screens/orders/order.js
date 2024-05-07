import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef,memo} from 'react';

import {commonStyles,palette, windowWidthPx} from '../config';
import placeholderImage from '../../assets/images/placeholderImage.png'
import SvgMaker from '../components/SvgMaker';
import profilePng from '../../assets/images/account.png'
export default memo(function Order({gig,parentNav,handleOrderPress}){
    
    return (
    <View style={styles.container}>

    <TouchableOpacity onPress={handleOrderPress} style={styles.order}>
        <Image resizeMode='contain' style={styles.preview} source={gig.image?gig.image:placeholderImage}></Image>
        <View style={{flex:1,paddingLeft:10}}>
            <Text style={styles.category}>{gig.category}</Text>
            <Text numberOfLines={3} style={styles.title}>{gig.title}</Text>
            <Text style={styles.price}>{gig.price} DH</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.reservation}>
        <View style={styles.reservation.profile}>
            <Image source={profilePng} style={styles.reservation.profile.image} />
            <Text style={styles.reservation.profile.sellerName}>Seller name</Text>
        </View>
        <Text style={styles.reservation.reservedDate}>Desired date: 
        {/* {new Date().toISOString()} */} 2024-5-6
        </Text>
    </TouchableOpacity>
    </View>
    )
})
const styles = StyleSheet.create({
    order:{
        height:100,width:windowWidthPx-20,flexDirection:'row',
        borderBottomLeftRadius:10,borderBottomRightRadius:10,
        overflow:'hidden',backgroundColor:'white'
    },
    reservation:{
        backgroundColor:palette.dark,//+'3f',
        paddingLeft:10,
        paddingBottom:5,
        paddingTop:5,
        reservedDate:{
            color:'white',
            fontFamily:'Montserrat-Regular'
        },
        profile:{
            flexDirection:'row',
            alignItems:'center',
            image:{
              width:23,
              height:23,
              borderRadius:25,
            },
            sellerName:{
              marginLeft:10,
              fontFamily:'Montserrat-Regular',
              fontSize:12,
              color:'white'
            }
          },
    },
    container:{
        backgroundColor:palette.dark,
        margin:10,
        borderRadius:10,
        overflow:'hidden',
        borderColor:palette.dark+'2f',
        borderWidth:1
    },
    status:{
        position:'absolute',
        bottom:3,
        right:10,
        fontFamily:'Raleway-SemiBold'
    },
    preview:{
        width:'40%',
        height:'100%',
        backgroundColor:'#f4f4f4'
    },
    category:{
        color:palette.dark+'3f',
        fontFamily:'Montserrat-Light'
    },
    title:{
        fontSize:15,
        fontFamily:'Montserrat-Regular'
    },
    price:{
        position:'absolute',
        bottom:3,
        left:10,
        fontSize:14,
        color:palette.dark,
        fontFamily:'Montserrat-Thin'
    },
})