import {ScrollView} from 'react-native';
import React, {useState,useEffect,useRef,useCallback, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { callApi, palette, windowHeightPx, windowWidthPx } from '../config';
import Gig from './gig';
import Loading from '../components/loading';
import Contexter from '../contexter';

export default function GigsPage({navigation,parentNav}){

    const context = useContext(Contexter)    
    const [gigs,setGigs] = useState()
    
    useEffect(() => {
        async function getGigs(){
            try{
            const response = await callApi(`/${context.userType}/services`,"get",{},{Authorization: `Bearer ${context.token}`})
                if(response.status==200) {
                    setGigs(response.data.services)
                }
                else {alert("Couldn't get Gigs")}
              } 
              catch (error) {
                console.log('Failed to fetch data',error);
              }   
          }
          getGigs();
      }, []);

      return (gigs?
        (<ScrollView style={{height:windowHeightPx - 100}} contentContainerStyle={{flexGrow:1,
            paddingBottom:100,alignItems:'center'}}>
            {gigs.map((d)=>{
                return (
                    <Gig parentNav={parentNav} key={d.key} gig={d}></Gig>
                )
            })}
            </ScrollView>):(<Loading.LoadingSpinner></Loading.LoadingSpinner>)
      )
}