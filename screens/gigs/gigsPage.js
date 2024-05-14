import {ScrollView} from 'react-native';
import React, {useState,useEffect,useRef,useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { palette, windowHeightPx, windowWidthPx } from '../config';
import Gig from './gig';

export default function GigsPage({navigation,parentNav}){
    return (<ScrollView style={{height:windowHeightPx - 100}} contentContainerStyle={{flexGrow:1,
        paddingBottom:100,alignItems:'center'}}>
        {data.map((d)=>{
            return (
                <Gig parentNav={parentNav} key={d.key} gig={d}></Gig>
            )
        })}
    </ScrollView>)
}
let data=[{
    key:0,
    category:"Electricien",
    title:'Trician hassan',
    price:200,
    image:null,
    status:"Published",
},
{
    key:1,
    category:"Lavage",
    title:'Doctor Alley',
    price:200,
    image:null,
    status:"Inactif",
},
{
    key:2,
    category:"Mechanicien",
    title:'Photo mariage',
    price:200,
    image:null,
    status:"Published",
},
{
    key:10,
    category:"Electricien",
    title:'Lavage de voitures',
    price:200,
    image:null,
    status:"Inactif",
},
{
    key:11,
    category:"Lavage",
    title:'Infirmière',
    price:200,
    image:null,
    status:"Inactif",
},
{
    key:12,
    category:"Mechanicien",
    title:'Trician hassan',
    price:200,
    image:null,
    status:"Published",
},
{
    key:20,
    category:"Electricien",
    title:'Trician hassan',
    price:200,
    image:null,
    status:"Inactif",
},
{
    key:21,
    category:"Lavage",
    title:'Trician hassan',
    price:200,
    image:null,
    status:"Published",
},
{
    key:22,
    category:"Mechanicien",
    title:'Trician hassan',
    price:200,
    image:null,
    status:"Inactif",
},
{
    key:30,
    category:"Electricien",
    title:'Trician hassan',
    price:200,
    image:null,
    status:"Inactif",
},
{
    key:31,
    category:"Lavage",
    title:'Trician hassan',
    price:200,
    image:null,
    status:"Inactif",
},
{
    key:32,
    category:"Mechanicien",
    title:'Trician hassan',
    price:200,
    image:null,
    status:"Published",
},{
    key:33,
    category:"Mechanicien",
    title:'Trician hassan',
    price:200,
    image:null,
    status:"Inactif",
},
{
    key:42,
    category:"Mechanicien",
    title:'Trician hassan',
    price:200,
    image:null,
    status:"Inactif",
},{
    key:43,
    category:"Mechanicien",
    title:'Trician hassan',
    price:200,
    image:null,
    status:"Published",
}]