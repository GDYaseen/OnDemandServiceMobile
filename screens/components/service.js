import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';
import { useFonts } from 'expo-font';

import {commonStyles,palette} from '../config';
import placeholderImage from '../../assets/images/placeholderImage.png'
export default function Service({previewData,title,category,price,stars}){
    
    return (
    <View style={styles.container}>
        <Image resizeMode='contain' style={styles.preview} source={previewData?previewData:placeholderImage}></Image>
        <View style={{flex:1,paddingLeft:10}}>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.stars}>{stars} ⭐</Text>
            <Text style={styles.price}>{price} DH</Text>
            <TouchableOpacity style={styles.hireButton}>
                <Text style={{fontFamily:'Montserrat-Regular',color:'white'}}>HIRE</Text>
            </TouchableOpacity>  
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:320,
        height:300,
        margin:15,
        marginRight:3,
        borderRadius:10,
        overflow:'hidden',
        borderColor:palette.secondary,
        borderWidth:1
    },
    preview:{
        width:'100%',
        height:'60%'
    },
    category:{
        color:palette.dark+'3f',
        fontFamily:'Montserrat-Light'
    },
    title:{
        fontSize:24,
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
        fontSize:20,
        color:'lightgreen',
        fontFamily:'Montserrat-Regular'
    },
    hireButton:{
        width:120,
        height:50,
        right:0,
        position:'absolute',
        bottom:0,
        backgroundColor:palette.secondary,
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:5
    },
})