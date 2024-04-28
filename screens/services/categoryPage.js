import {ScrollView} from 'react-native';
import React, {useState,useEffect,useRef,useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { palette, windowHeightPx, windowWidthPx } from '../config';
import CategoryLine from './categoryLine';

export default function CategoryPage({navigation}){
    return (<ScrollView style={{height:windowHeightPx - 100}} contentContainerStyle={{flexGrow:1,
        paddingBottom:100,alignItems:'center'}}>
        {data.map((d)=>{
            return (
                <CategoryLine key={d.key} category={d}></CategoryLine>
            )
        })}
    </ScrollView>)
}
let data=[{
    key:0,
    name:"Electricien",
    color:'#11abff',
    image:"services"
},
{
    key:1,
    name:"Lavage",
    color:'#4f3021',
    image:"analytics"
},
{
    key:2,
    name:"Mechanicien",
    color:'#de6c1f',
    image:"wrench"
},
{
    key:10,
    name:"Electricien",
    color:'#11abff',
    image:"services"
},
{
    key:11,
    name:"Lavage",
    color:'#4f3021',
    image:"analytics"
},
{
    key:12,
    name:"Mechanicien",
    color:'#de6c1f',
    image:"wrench"
},
{
    key:20,
    name:"Electricien",
    color:'#11abff',
    image:"services"
},
{
    key:21,
    name:"Lavage",
    color:'#4f3021',
    image:"analytics"
},
{
    key:22,
    name:"Mechanicien",
    color:'#de6c1f',
    image:"wrench"
},
{
    key:30,
    name:"Electricien",
    color:'#11abff',
    image:"services"
},
{
    key:31,
    name:"Lavage",
    color:'#4f3021',
    image:"analytics"
},
{
    key:32,
    name:"Mechanicien",
    color:'#de6c1f',
    image:"wrench"
},{
    key:33,
    name:"Mechanicien",
    color:'#1e6c1f',
    image:"wrench"
},
{
    key:42,
    name:"Mechanicien",
    color:'#444444',
    image:"wrench"
},{
    key:43,
    name:"Mechanicien",
    color:'#1e2c1f',
    image:"wrench"
}]