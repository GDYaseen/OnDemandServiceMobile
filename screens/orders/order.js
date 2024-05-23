import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef,memo, useContext} from 'react';

import {commonStyles,palette, windowWidthPx} from '../config';
import placeholderImage from '../../assets/images/placeholderImage.png'
import SvgMaker from '../components/SvgMaker';
import profilePng from '../../assets/images/account.png'
import Contexter from '../contexter';
export default memo(function Order({gig,parentNav,handleOrderPress}){
    const context = useContext(Contexter)
    return (
    <View style={styles.container}>

    <TouchableOpacity onPress={handleOrderPress} style={styles.order}>
        <Image resizeMode='contain' style={styles.preview} source={gig.image?gig.image:placeholderImage}></Image>
        <View style={{flex:1,paddingLeft:10}}>
            <Text style={styles.category}>{gig.service.category}</Text>
            <Text numberOfLines={3} style={styles.title}>{gig.service.name}</Text>
            <Text style={styles.price}>{gig.service.price} DH</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.reservation}>
        <View style={styles.reservation.profile}>
            <Image source={profilePng} style={styles.reservation.profile.image} />
            <Text style={styles.reservation.profile.sellerName}>{context.userType=="provider"?gig.client.first_name+" "+gig.client.last_name:gig.provider.first_name+" "+gig.provider.last_name}</Text>
        </View>
        <Text style={styles.reservation.reservedDate}>Desired date: {gig.date}</Text>
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