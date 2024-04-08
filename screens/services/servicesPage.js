import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated,ScrollView} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';

import Service from './service';
import Category from './category';
import {commonStyles,palette,screenWidthPx,screenHeightPx} from '../config';
import SvgMaker from '../components/SvgMaker';
export default function ServicesPage({navigation,parentNav}){
    return (
        <ScrollView contentContainerStyle={{alignItems:'center'}}>
        <View style={[{paddingBottom:10},styles.sectionBar]}>
            <SvgMaker source={'thumbsUp'} fill={palette.secondary} width={25} height={25}></SvgMaker>
            <Text style={{color:palette.dark,alignSelf:'center',marginLeft:5,fontSize:13,fontFamily:'Montserrat-Regular'}}>Recommanded sellers</Text>
        </View>
        <View style={{backgroundColor:palette.secondary+'2f',height:screenHeightPx/2,borderTopColor:palette.dark+'2f',borderTopWidth:1,borderBottomColor:palette.dark+'2f',borderBottomWidth:1}}>
        <ScrollView nestedScrollEnabled = {true} style={{paddingBottom:15,flex:1,width:screenWidthPx}}>
            {data.map((d)=>{
                return (<Service parentNav={parentNav} key={d.key} service={d} />)})}
        </ScrollView>
        </View>
        <View style={styles.sectionBar}>
            {/* <SvgMaker source={'thumbsUp'} fill={palette.secondary} width={25} height={25}></SvgMaker> */}
            <Text style={{marginBottom:5,color:palette.dark,alignSelf:'center',marginLeft:5,fontSize:17,fontFamily:'Montserrat-Bold'}}>Popular Categories</Text>
        </View>
        <View style={{height:335}}>
        <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
            {categoriesData.map((d)=>{
                return (<Category key={d.key} image={d.image} title={d.title}/>)})}
        </ScrollView>
        </View>
    </ScrollView>
    )
}

let styles=StyleSheet.create({
    sectionBar:{
        alignSelf:'flex-start',
        paddingTop:10,
        paddingLeft:10,
        flexDirection:'row'
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

let categoriesData=[{
        key:10,
        title:"Electricien",
        image:null
    },{
        key:56,
        title:'Lavage',
        image:null
    },{
        key:29,
        title:'Photographer',
        image:null
    },{
        key:18,
        title:'Writer',
        image:null
    },
    {
        key:2,
        title:'Cleaner',
        image:null
    }]