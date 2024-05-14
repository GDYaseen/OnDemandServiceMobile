import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated,ScrollView} from 'react-native';
import React, {useState,useEffect,useRef, useContext} from 'react';

import Service from './service';
import Category from './category';
import {commonStyles,palette,windowWidthPx,windowHeightPx, callApi} from '../config';
import SvgMaker from '../components/SvgMaker';
import Contexter from '../contexter';
import Loading from '../components/loading';

export default function ServicesPage({navigateTo,navigation,parentNav}){
    const context = useContext(Contexter)    
    const [services,setServices] = useState()
    const [categories,setCategories] = useState([])
    
    useEffect(() => {
        async function getCategories(){
            try{
            const response = await callApi(`/${context.userType}/categories`,"get",{},{Authorization: `Bearer ${context.token}`})
                if(response.status==200) {
                    setCategories(response.data)
                    context.categories = response.data
                }
                else {alert("Couldn't get categories")}
              } 
              catch (error) {
                console.log('Failed to fetch data',error);
              }   
          }
          
        async function getServices() {
            try {
                const response = await callApi(`/${context.userType}/services`,"get",{},{Authorization: `Bearer ${context.token}`})
                if(response.status==200) {
                    if(context.userType=="client") await getCategories()
                    setServices(response.data.services)
                }
                else {alert("Couldn't get services")}
              } 
              catch (error) {
                console.log('Failed to fetch data',error);
              }
        }
        getServices();
      }, []);

    return (
        <ScrollView contentContainerStyle={{alignItems:'center'}}>
        <View style={[{paddingBottom:10},styles.sectionBar]}>
            <SvgMaker source={'thumbsUp'} fill={palette.secondary} width={25} height={25}></SvgMaker>
            <Text style={{color:palette.dark,alignSelf:'center',marginLeft:5,fontSize:13,fontFamily:'Montserrat-Regular'}}>Recommanded sellers</Text>
        </View>
        <View style={{backgroundColor:palette.secondary+'22',height:windowHeightPx/2,borderTopColor:palette.dark+'2f',borderTopWidth:1,borderBottomColor:palette.dark+'2f',borderBottomWidth:1}}>
        {services ? (
            <ScrollView nestedScrollEnabled = {true} style={{paddingBottom:15,flex:1,width:windowWidthPx}}>
                {services?.map((d)=>{
                    return (<Service parentNav={parentNav} key={d.id} service={d} />)})}
                </ScrollView>
            ) : (
                <Loading.LoadingSpinner></Loading.LoadingSpinner>
            )}
        </View>
        <View style={[styles.sectionBar,{justifyContent:'space-between'}]}>
            {/* <SvgMaker source={'thumbsUp'} fill={palette.secondary} width={25} height={25}></SvgMaker> */}
            <Text style={{color:palette.dark,alignSelf:'center',marginLeft:5,fontSize:17,fontFamily:'Montserrat-Bold'}}>Popular Categories</Text>
            <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>navigateTo('Categories',{categoriesList:categories})}>
                <Text style={{color:palette.secondary,fontFamily:'Raleway-Regular'}}>More</Text></TouchableOpacity>
        </View>
        <View style={{height:335}}>
        {categories ? (
        <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
                {categories.slice(0,4).map((d)=>{
                return (<Category parentNav={navigation} key={d.id} category={d}/>)})}
                </ScrollView>
            ) : (
                <Loading.LoadingSpinner></Loading.LoadingSpinner>
            )}
        </View>
    </ScrollView>
    )
}

let styles=StyleSheet.create({
    sectionBar:{
        width:windowWidthPx,
        alignSelf:'flex-start',
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row',
        paddingBottom:5
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