import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';

import {commonStyles,palette, windowWidthPx} from '../config';
import placeholderImage from '../../assets/images/placeholderImage.png'
import SvgMaker from '../components/SvgMaker';
export default function CategoryLine({category,parentNav}){
    
    return (
    <View style={[styles.container,{backgroundColor:category.color}]}>
        <SvgMaker style={styles.image} fill={'white'} width={45} height={45} source={category.image?category.image:"barsSolid"}></SvgMaker>
        <Text style={{color:'white',fontFamily:'Montserrat-Regular',fontSize:17}}>{category.name}</Text>
    </View>
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