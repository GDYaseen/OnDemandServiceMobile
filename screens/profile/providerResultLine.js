import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef, useContext} from 'react';

import {commonStyles,palette, windowWidthPx} from '../config';
import profilePng from "../../assets/images/account.png";
import SvgMaker from '../components/SvgMaker';
import Contexter from '../contexter';
export default function ProviderResultLine({provider,parentNav}){
    const context = useContext(Contexter)
    return (
        <TouchableOpacity onPress={()=>context.nav.navigate("ProviderDetails",{provider:provider})} style={styles.profile}>
            <Image source={profilePng} style={styles.profile.image} />
            <Text style={styles.profile.sellerName}>{provider.first_name} {provider.last_name}</Text>
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    profile:{
        backgroundColor:'white',
        borderRadius:10,
        marginBottom:20,
        flexDirection:'row',
        alignItems:'center',
        width:'90%',
        borderWidth:1,
        borderColor:palette.secondary,
        alignSelf:'center',
        image:{
            width:50,
            height:50,
            borderRadius:25,
            margin:5,
            borderColor:palette.primary,
            borderWidth:1
          },
          sellerName:{
            marginLeft:10,
            fontFamily:'Montserrat-Medium',
            fontSize:16,
            color:'black'
          }
        
    }
})