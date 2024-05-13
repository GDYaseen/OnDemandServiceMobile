import {ScrollView,Text} from 'react-native';
import React, {useState,useEffect,useRef,useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { palette, windowHeightPx, windowWidthPx } from '../config';
import CategoryLine from './categoryLine';

export default function CategoryPage({navigation,route}){
    const {categoriesList} = route.params
    return (<ScrollView style={{height:windowHeightPx - 100}} contentContainerStyle={{flexGrow:1,
        paddingBottom:100,alignItems:'center'}}>
        {categoriesList.map((d)=>{
            return (
                <CategoryLine parentNav={navigation} key={d.id} category={d}></CategoryLine>
            )
        })}
    </ScrollView>)
}