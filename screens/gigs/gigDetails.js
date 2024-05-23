import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, Animated, TouchableOpacity, Image, Touchable } from 'react-native';


import placeholderImage from '../../assets/images/placeholderImage.png'
import SvgMaker from '../components/SvgMaker';

import { palette,windowWidthPx } from '../config';

export default function GigDetails({navigation,route}) {
  const { _gig } = route.params;
  return (
    <ScrollView stickyHeaderIndices={[0]}>
        <View style={{width:windowWidthPx,height:50,backgroundColor:palette.dark}}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.back} >
            <SvgMaker  source={'back'} width={20} height={20} fill={"#fff"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("GigEdit",{gig:_gig})} style={styles.edit} >
            <SvgMaker  source={'edit'} width={20} height={20} fill={"#fff"} />
            </TouchableOpacity>
        </View>
        <Image source={(_gig.images?.length!=0)?_gig.images[0]:placeholderImage} resizeMode="contain" style={{height:200,backgroundColor:'lightgray',width:windowWidthPx}}/>
      <View style={styles.content}>
        <View style={styles.content.price}><Text style={styles.content.price.text}>{_gig.price} DH</Text></View>
        <Text style={styles.content.title}>{_gig.name}</Text>
        <Text style={styles.content.category}>{_gig.category.name}</Text>
        <Text style={styles.content.description}>{_gig.description}</Text>
      </View>
      <View style={styles.content}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity style={[styles.content.button,{backgroundColor:palette.dark+'8f'}]}>
                            <Text style={styles.content.button.text}>Preview</Text></TouchableOpacity>
        {_gig.status=="published"?
        <TouchableOpacity style={[styles.content.button,{backgroundColor:"#fc4749"}]}>
                            <Text style={styles.content.button.text}>Deactivate</Text></TouchableOpacity>
        :<TouchableOpacity style={[styles.content.button,{backgroundColor:"limegreen"}]}>
                            <Text style={styles.content.button.text}>Activate</Text></TouchableOpacity>
        }
        </View>
        
      </View>
    </ScrollView>
  )
}
let styles = StyleSheet.create({
    back:{
        width:50,
        height:50,
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:"#000",
        elevation: 20,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
        zIndex:1,
      },
    edit:{
        width:50,
        height:50,
        position:'absolute',
        right:0,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:"#000",
        elevation: 20,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
        zIndex:1,
  },
  content:{
    padding:10,
    borderBottomWidth:1,
    borderColor:'lightgray',
    overflow: 'visible',
    title:{
      fontFamily:'Montserrat-Bold',
      fontSize:25,
    },
    description:{
      textAlign:'justify',
      fontSize:14,
      fontFamily:'Raleway-Light'
    },
    category:{
        fontFamily:"Raleway-Regular",
        fontSize:14,
        color:palette.secondary
    },
    price:{
      text:{
        color:'white',
        fontSize:14,
        fontFamily:'Montserrat-Regular',
      }, 
      position:'absolute',
      paddingRight:5,
      paddingLeft:5,
      justifyContent:'center',
      height:30,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      backgroundColor:palette.dark,
      top:-30,
      right:5
    },
    button:{
        width:windowWidthPx*0.45,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        text:{
            fontSize:15,
            fontFamily:'Montserrat-Regular',
            color:'white'
        }
    }
  },
})