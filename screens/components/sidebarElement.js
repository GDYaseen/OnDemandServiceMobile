import React, { useState, useRef, useContext,memo } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity,Image} from 'react-native';
import {windowWidthPx,windowHeightPx,palette} from '../config'
import SvgMaker from './SvgMaker';

import Contexter from '../contexter';
export default memo(function SidebarElement({image,elementName,isSelected,pageName}){
  const context = useContext(Contexter)
    return(
        <TouchableOpacity onPress={()=>context.nav.navigate(pageName)} style={[styles.element,isSelected?{backgroundColor:'#00000077'}:null]}>
                <SvgMaker source={image} width={25} height={25} fill={palette.secondary} style={styles.element.image} />
                <Text style={styles.element.elementName}>{elementName}</Text>
            </TouchableOpacity>
    )    
})
const styles = StyleSheet.create({
    element:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        image:{
          borderRadius:12,
          margin:10,
          borderColor:palette.primary,
          borderWidth:1
        },
        elementName:{
          marginLeft:6,
          fontFamily:'Montserrat-Light',
          fontSize:14,
          color:'white'
        }
      }
})