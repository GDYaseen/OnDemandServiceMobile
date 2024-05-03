import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';

import {commonStyles,palette, windowWidthPx} from '../config';
import placeholderImage from '../../assets/images/placeholderImage.png'
import SvgMaker from '../components/SvgMaker';
export default function Gig({gig,parentNav}){
    
    return (
    <TouchableOpacity onPress={()=>parentNav.navigate("GigDetails",{id:gig.key})} style={styles.container}>
        <Image resizeMode='contain' style={styles.preview} source={gig.image?gig.image:placeholderImage}></Image>
        <View style={{flex:1,paddingLeft:10}}>
            <Text style={styles.category}>{gig.category}</Text>
            <Text numberOfLines={3} style={styles.title}>{gig.title}</Text>
            <Text style={styles.price}>{gig.price} DH</Text>
            <Text style={[styles.status,{color:gig.status=="Published"?"#64c62eaf":"#fc2672df"}]}>{gig.status}</Text>
            {/* <TouchableOpacity onPress={()=>{parentNav.navigate("ServiceDetails",{id:gig.key})}} style={styles.hireButton}>
                <Text style={{fontFamily:'Montserrat-Regular',color:'white'}}>HIRE</Text>
            </TouchableOpacity>   */}
        </View>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:100,
        margin:10,
        flexDirection:'row',
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