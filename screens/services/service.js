import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';

import {commonStyles,palette} from '../config';
import placeholderImage from '../../assets/images/placeholderImage.png'
export default function Service({service,parentNav}){
    
    return (
    <View style={styles.container}>
        <Image resizeMode='contain' style={styles.preview} source={service.image?service.image:placeholderImage}></Image>
        <View style={{flex:1,paddingLeft:10}}>
            <Text style={styles.category}>{service.category}</Text>
            <Text style={styles.title}>{service.title}</Text>
            <Text style={styles.stars}>{service.stars} ⭐</Text>
            <Text style={styles.price}>{service.price} DH</Text>
            <TouchableOpacity onPress={()=>{parentNav.navigate("ServiceDetails",{id:service.key})}} style={styles.hireButton}>
                <Text style={{fontFamily:'Montserrat-Regular',color:'white'}}>HIRE</Text>
            </TouchableOpacity>  
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:130,
        margin:10,
        flexDirection:'row',
        borderRadius:10,
        overflow:'hidden',
        borderColor:palette.secondary,
        borderWidth:1
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
        fontSize:18,
        fontFamily:'Montserrat-Regular'
    },
    stars:{
        position:"absolute",
        top:5,
        right:10,
        fontFamily:'Montserrat-Light'
    },
    price:{
        position:'absolute',
        bottom:5,
        left:10,
        fontSize:17,
        color:palette.dark,
        fontFamily:'Montserrat-Thin'
    },
    hireButton:{
        width:100,
        height:30,
        right:5,
        position:'absolute',
        bottom:5,
        backgroundColor:palette.secondary,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
})