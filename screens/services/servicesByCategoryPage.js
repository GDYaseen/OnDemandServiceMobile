import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated,ScrollView} from 'react-native';
import React, {useState,useEffect,useRef, useContext} from 'react';

import Service from './service';
import Category from './category';
import {commonStyles,palette,windowWidthPx,windowHeightPx, callApi} from '../config';
import SvgMaker from '../components/SvgMaker';
import Contexter from '../contexter';
import Loading from '../components/loading';

export default function ServicesByCategoryPage({route,parentNav}){
    const {id,categName} = route.params
    const context = useContext(Contexter)    
    const [services,setServices] = useState()
    useEffect(() => {
        async function getServices() {
            try {
                const response = await callApi(`/${context.userType}/categories/${id}`,"get",{},{Authorization: `Bearer ${context.token}`})
                if(response.status==200) {
                    setServices(response.data)
                }
                else {
                    alert("Couldn't get services")
                    setServices([])
                }
              } 
              catch (error) {
                console.log('Failed to fetch data',error);
              }
        }
        getServices();
      }, []);
      let l = []
    return (
        
        <View style={{alignItems:'center',flex:1}}>
            <View style={[{paddingBottom:10,backgroundColor:palette.dark},styles.sectionBar]}>
            <Text style={{color:palette.bright,alignSelf:'center',marginLeft:5,fontSize:16,fontFamily:'Montserrat-SemiBold'}}>{categName}</Text>
        </View>
        {services ? services.length>0? (
            <ScrollView nestedScrollEnabled = {true} style={{paddingBottom:15,flex:1,width:windowWidthPx}}>
                {services?.map((d)=>{
                    return (<Service parentNav={parentNav} key={d.id} service={d} />)})}
                </ScrollView>
            ):(<Text style={{marginTop:40,textAlign:'center',color:'darkgrey',fontSize:20,fontFamily:'Montserrat-Regular'}}>No services available in that category</Text> ): (
                <Loading.LoadingSpinner></Loading.LoadingSpinner>
            )}
        </View>
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
        paddingBottom:10
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