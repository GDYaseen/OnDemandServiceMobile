import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';

import {commonStyles,palette,windowWidthPx} from '../config';
import placeholderImage from '../../assets/images/placeholderImage.png'
export default function Category({image,title}){
    return (
    <TouchableOpacity style={styles.container} >
        <Image resizeMode='contain' style={styles.image} source={image?image:placeholderImage}></Image>
        <Text numberOfLines={1} adjustsFontSizeToFit={true} style={styles.title}>{title}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:110,
        height:150,
        margin:5,
        borderRadius:10,
        overflow:'hidden',
        borderColor:palette.secondary,
        borderWidth:1,
        shadowColor: '#171717',
        elevation: 5,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    title:{
        paddingLeft:5,
        fontSize:15,
        fontFamily:'Montserrat-Regular'
    },
    image:{
        width:'100%'
    }
})