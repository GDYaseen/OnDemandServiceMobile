import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef,useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { palette, windowHeightPx, windowWidthPx } from '../config';

export default function NotProvider({navigation}){
    return (<View style={{height:windowHeightPx - 100,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'darkgrey',fontSize:20,fontFamily:'Montserrat-Regular'}} >You're not a seller yet...</Text>
        <TouchableOpacity style={{backgroundColor:palette.secondary,width:300,alignItems:'center',
                    height:50,borderRadius:25,marginTop:10,justifyContent:'center'}}>
            <Text style={{color:'white',fontFamily:'Raleway-Light',
                fontSize:17}}>Become a seller now!</Text></TouchableOpacity>
    </View>)
}