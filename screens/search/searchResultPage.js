import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated,ScrollView} from 'react-native';
import React, {useState,useEffect,useRef, useContext} from 'react';

import {commonStyles,palette,windowWidthPx,windowHeightPx, callApi} from '../config';
import SvgMaker from '../components/SvgMaker';
import Contexter from '../contexter';
import Loading from '../components/loading';
import Service from '../services/service';
import ProviderResultLine from '../profile/providerResultLine';

export default function SearchResultPage({route,parentNav}){
    const {keywords} = route.params
    const context = useContext(Contexter)    
    const [services,setServices] = useState()
    const [providers,setProviders] = useState()
    const [resultType,setResultType] = useState("Services")
    
    useEffect(() => {
        async function searchProvidersAndServices(keyword){
            try {
                const response = await callApi(`/${context.userType}/search?keyword=${keyword}`,"get",{},{Authorization: `Bearer ${context.token}`})
                if(response.status==200) {
                    setServices(response.data.services)
                    setProviders(response.data.providers)
                }else{
                    alert("No results found maybe")
                    console.log(response.data)
                }
              } 
              catch (error) {
                console.log('Failed to fetch data',error);
            }
        }
        if(keywords) searchProvidersAndServices(keywords)
      }, []);
      let l = []
    return (
        
        <View style={{alignItems:'center',flex:1}}>

            <View style={styles.resultTypeContainer}>

            <TouchableOpacity style={[styles.resultTypeContainer.type,{backgroundColor:resultType=="Services"?palette.secondary:'transparent'}]} 
                  onPress={() => setResultType("Services")} >
              <Text style={{fontFamily:'Montserrat-Regular',color:resultType=="Services"?'white':palette.secondary}}>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.resultTypeContainer.type,{backgroundColor:resultType=="Providers"?palette.secondary:'transparent'}]} 
                  onPress={() => setResultType("Providers")} >
              <Text style={{fontFamily:'Montserrat-Regular',color:resultType=="Providers"?'white':palette.secondary}}>Providers</Text>
            </TouchableOpacity>
                      </View>



        {resultType=="Services"?
            services ? services.length>0? (
                <ScrollView nestedScrollEnabled = {true} style={{paddingBottom:15,flex:1,width:windowWidthPx}}>
                {services?.map((d)=>{
                    return (<Service parentNav={parentNav} key={d.id} service={d} />)})}
                    </ScrollView>
                ):(<Text style={{marginTop:40,textAlign:'center',color:'darkgrey',fontSize:20,fontFamily:'Montserrat-Regular'}}>No services available with that keyword</Text> ): (
                    <Loading.LoadingSpinner></Loading.LoadingSpinner>
                )
            :
            providers ? providers.length>0? (
                <ScrollView nestedScrollEnabled = {true} style={{paddingBottom:15,flex:1,width:windowWidthPx}}>
                {providers?.map((p)=>{
                    return (<ProviderResultLine parentNav={parentNav} key={p.id} provider={p} />)})}
                    </ScrollView>
                ):(<Text style={{marginTop:40,textAlign:'center',color:'darkgrey',fontSize:20,fontFamily:'Montserrat-Regular'}}>No providers available with that keyword</Text> ): (
                    <Loading.LoadingSpinner></Loading.LoadingSpinner>
                )
        }
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
        paddingBottom:5
    },
    resultTypeContainer:{
        flexDirection:'row',
        alignItems:'space-between',
        width:windowWidthPx,
        marginBottom:10,
        type:{
            height:30,
            padding:5,
            borderWidth:1,
            borderRadius:15,
            borderColor:palette.secondary,
            width:100,
            alignItems:'center',
            margin:10
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