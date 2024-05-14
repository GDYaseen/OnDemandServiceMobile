import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';

import {commonStyles,palette,windowWidthPx} from '../config';
import placeholderImage from '../../assets/images/placeholderImage.png'
export default function Category({category,parentNav}){
    return (
    <TouchableOpacity onPress={()=>parentNav.navigate("ServicesByCategory",{id:category.id})} style={[styles.container,{backgroundColor:category.color?category.color:'white'},{borderColor:category.color?category.color:palette.secondary}]} >
        {category.icon?
        <SvgMaker style={styles.image} fill={'white'} width={'50%'} height={'60%'} content={category.icon}/>
        :
        <Image resizeMode='contain' style={styles.image} source={placeholderImage}></Image>
        }
        <Text numberOfLines={3} adjustsFontSizeToFit={true} style={styles.title}>{category.name}</Text>
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
        textAlign:'center',
        fontSize:15,
        fontFamily:'Montserrat-Regular',
        color:'white'
    },
    image:{
        marginTop:10,
        alignSelf:'center'
    }
})