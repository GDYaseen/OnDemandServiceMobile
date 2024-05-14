import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef,useCallback, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { handleNavDispatch, palette, removeData, windowHeightPx, windowWidthPx } from '../config';
import Contexter from '../contexter';

export default function NotProvider({navigation}){
    const context = useContext(Contexter)
    async function disconnect() {
        try{
            context.setLoadingActive(true)
            await removeData("token")
            await removeData("currentUser")
            await removeData("userType")
            context.nav.dispatch(handleNavDispatch("Login"));
        } catch(error){
            alert(error)
        } finally{
            context.setLoadingActive(false)
        }
      }

    return (<View style={{height:windowHeightPx - 100,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'darkgrey',fontSize:20,fontFamily:'Montserrat-Regular'}} >You're not a provider yet...</Text>
        <TouchableOpacity onPress={()=>disconnect()} style={{backgroundColor:palette.secondary,width:300,alignItems:'center',
                    height:50,borderRadius:25,marginTop:10,justifyContent:'center'}}>
            <Text style={{color:'white',fontFamily:'Raleway-Light',
                fontSize:17}}>Become a provider now!</Text></TouchableOpacity>
    </View>)
}