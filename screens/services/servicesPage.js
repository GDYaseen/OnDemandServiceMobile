import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated,ScrollView} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';

import Service from '../components/service';
import {commonStyles,palette} from '../config';
import SvgMaker from '../components/SvgMaker';
export default function ServicesPage({navigation}){
    return (
        <ScrollView style={{height:'100%'}} contentContainerStyle={{alignItems:'center'}}>
        <View style={styles.sectionBar}>
            <SvgMaker source={'thumbsUp'} fill={palette.secondary} width={25} height={25}></SvgMaker>
            <Text style={{color:palette.dark,alignSelf:'center',marginLeft:5,fontSize:13,fontFamily:'Montserrat-Regular'}}>Recommanded services</Text>
        </View>
        <View style={{backgroundColor:palette.secondary+'2f',height:335,borderTopColor:palette.dark+'2f',borderTopWidth:1,borderBottomColor:palette.dark+'2f',borderBottomWidth:1}}>
        <ScrollView horizontal={true}>
            <Service price={100} stars={4.9} title={"Trician Hassan"} category={'Electricien'}/>
            <Service price={30} stars={2.1} title={"CarWash"} category={'Lavage'}/>
            <Service price={20} stars={0.6} title={"Studio 2019"} category={'Photographer'}/>
        </ScrollView>
        </View>
    </ScrollView>
    )
}
let data=[{}]

let styles=StyleSheet.create({
    sectionBar:{
        alignSelf:'flex-start',
        padding:10,
        flexDirection:'row'
    }
})