import { StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated,ScrollView} from 'react-native';
import React, {useState,useEffect,useRef,useCallback, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {commonStyles,palette,screenHeightPx,windowHeightPx,windowWidthPx} from '../config';
import Sidebar from '../components/Sidebar';
import SvgMaker from '../components/SvgMaker'


import { NavigationContainer } from '@react-navigation/native';
import Contexter from '../contexter';
import {SafeAreaView} from 'react-native-safe-area-context';
import profilePng from '../../assets/images/account.png'
import HideableText from '../components/HideableText';
import Service from '../services/service';

export default function ProviderDetails({navigation}){

    return(
        <ScrollView contentContainerStyle={{flexGrow:1,
        paddingBottom:50}}>
            <View style={{height:50,backgroundColor:palette.dark,flexDirection:'row'}}>
                <TouchableOpacity style={styles.back} onPress={()=>{
                    navigation.goBack();navigation.goBack();navigation.navigate("ServiceDetails",{id:0})}} >
                    <SvgMaker  source={'back'} width={20} height={20} fill={"#fff"} />
                </TouchableOpacity>
            </View>
            <View style={styles.profile}>
                <Image source={profilePng}
                    style={styles.profile.image} />
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.detail}><Text style={styles.detail.title}>First Name:</Text><Text style={styles.detail.value}>myFirstName</Text></View>
                <View style={styles.detail}><Text style={styles.detail.title}>Last Name:</Text><Text style={styles.detail.value}>myLastName</Text></View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.detail}><Text style={styles.detail.title}>Id Card:</Text>

                    <Text style={styles.detail.value}>NE4232832</Text></View>
            <View style={styles.detail}><Text style={styles.detail.title}>Phone Number:</Text>
                    <Text style={styles.detail.value}>+212 6 42328329</Text></View>
            </View>
            <View style={styles.detail}><Text style={styles.detail.title}>Email:</Text>
                    <Text style={styles.detail.value}>something@somewhere.com</Text></View>
            <View style={styles.detail}><Text style={styles.detail.title}>Working days:</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={[styles.detail.workingDay,
                        {color:workingDays.includes("Mo")?'white':palette.secondary,
                        backgroundColor:workingDays.includes("Mo")?palette.secondary:'white'}]}>Mo</Text>
                    <Text style={[styles.detail.workingDay,
                        {color:workingDays.includes("Tu")?'white':palette.secondary,
                        backgroundColor:workingDays.includes("Tu")?palette.secondary:'white'}]}>Tu</Text>
                    <Text style={[styles.detail.workingDay,
                        {color:workingDays.includes("We")?'white':palette.secondary,
                        backgroundColor:workingDays.includes("We")?palette.secondary:'white'}]}>We</Text>
                    <Text style={[styles.detail.workingDay,
                        {color:workingDays.includes("Th")?'white':palette.secondary,
                        backgroundColor:workingDays.includes("Th")?palette.secondary:'white'}]}>Th</Text>
                    <Text style={[styles.detail.workingDay,
                        {color:workingDays.includes("Fr")?'white':palette.secondary,
                        backgroundColor:workingDays.includes("Fr")?palette.secondary:'white'}]}>Fr</Text>
                    <Text style={[styles.detail.workingDay,
                        {color:workingDays.includes("Sa")?'white':palette.secondary,
                        backgroundColor:workingDays.includes("Sa")?palette.secondary:'white'}]}>Sa</Text>
                    <Text style={[styles.detail.workingDay,
                        {color:workingDays.includes("Su")?'white':palette.secondary,
                        backgroundColor:workingDays.includes("Su")?palette.secondary:'white'}]}>Su</Text>
                </View>        
            </View>
            <View style={{marginTop:20,backgroundColor:palette.secondary+'22',height:windowHeightPx/2,borderTopColor:palette.dark+'2f',borderTopWidth:1,borderBottomColor:palette.dark+'2f',borderBottomWidth:1}}>
        
            <ScrollView nestedScrollEnabled = {true} style={{paddingBottom:15,flex:1,width:windowWidthPx}}>
            {data.map((d)=>{
                return (<Service parentNav={navigation} key={d.key} service={d} />)})}
        </ScrollView>
        </View>
            <StatusBar hidden={true}/>
        </ScrollView>
    )
}
const workingDays = ["Tu","Th","Sa","Su"]
const styles = StyleSheet.create({
    profile:{
        alignItems:'center',
        width:'100%',
        image:{
          width:windowWidthPx*0.694/2,
          height:windowWidthPx*0.694/2,
          borderRadius:windowWidthPx*0.694/4,
          margin:5,
          borderColor:palette.secondary,
          borderWidth:1,
          marginTop:10,
        },
        username:{
          fontFamily:'Montserrat-Light',
          fontSize:23,
          color:'black'
        }
      },
        sidebarButton:{
            position:'absolute',
            top:0,
            left:0,
            justifyContent:'center',
            alignItems:'center',
            width:50,
            height:50,
            marginLeft:10,
            marginRight:10
        },
    
    back:{
        width:50,
        height:50,
        position:'absolute',
        left:0,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:"#000",
        elevation: 20,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
        zIndex:1,
  },
  eye:{
    position:'absolute',
    right:0,
    justifyContent:'center',
    alignItems:'center',
},
  detail:{
    padding:10,
    maxHeight:60,
    flex:1,
    title:{
        fontFamily:'Raleway-Regular',
        color:palette.dark
    },
    value:{
        fontFamily:'Montserrat-Light',
        color:palette.secondary
    },
    workingDay:{
        fontFamily:'Montserrat-Light',
        borderRadius:17,
        borderWidth:1,
        borderColor:palette.secondary,
        width:35,
        height:35,
        textAlign:'center',
        marginTop:10,
        paddingTop:7,
        marginBottom:20
    }
  }
})

let data=[{
    key:10,
        price:100,
        stars:4.9,
        title:"Trician Hassan industries yes",
        category:"Electricien",
        image:null
    },{
        key:56,
        price:30,
        stars:2.1,
        title:"CarWash",
        category:'Lavage',
        image:null
    },{
        key:29,
        price:20,
        stars:0.6,
        title:"Studio 2019",
        category:'Photographer',
        image:null
    }]