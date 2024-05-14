import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';

import {commonStyles,palette, windowWidthPx} from '../config';
import placeholderImage from '../../assets/images/placeholderImage.png'
import SvgMaker from '../components/SvgMaker';
export default function CategoryLine({category,parentNav}){
    
    return (
    <TouchableOpacity onPress={()=>parentNav.navigate("ServicesByCategory",{id:category.id,categName:category.name})} style={[styles.container,{backgroundColor:category.color}]}>
        {category.icon?<SvgMaker style={styles.image} fill={'white'} width={45} height={45} content={category.icon}></SvgMaker>:null}
        <Text style={{color:'white',fontFamily:'Montserrat-Regular',fontSize:17,marginLeft:10}}>{category.name}</Text>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        height:70,
        marginTop:10,
        flexDirection:'row',
        borderRadius:10,
        width:windowWidthPx-30,
        overflow:'hidden',
        alignItems:'center'
    },
    image:{
        margin:10
    }
})