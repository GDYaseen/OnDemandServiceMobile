import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, Animated, TouchableOpacity, Image, Touchable } from 'react-native';


import placeholderImage from '../../assets/images/placeholderImage.png'
import SvgMaker from '../components/SvgMaker';

import { palette,windowWidthPx } from '../config';

export default function GigDetails({navigation,route}) {
  const { id } = route.params;
    let state="Published"
  return (
    <ScrollView stickyHeaderIndices={[0]}>
        <View style={{width:windowWidthPx,height:50,backgroundColor:palette.dark}}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.back} >
            <SvgMaker  source={'back'} width={20} height={20} fill={"#fff"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("GigEdit",{id:id})} style={styles.edit} >
            <SvgMaker  source={'edit'} width={20} height={20} fill={"#fff"} />
            </TouchableOpacity>
        </View>
        <Image source={placeholderImage} resizeMode="contain" style={{height:200,backgroundColor:'lightgray',width:windowWidthPx}}/>
      <View style={styles.content}>
        <View style={styles.content.price}><Text style={styles.content.price.text}>10000DH</Text></View>
        <Text style={styles.content.title}>Title titling the title thing</Text>
        <Text style={styles.content.category}>Category</Text>
        <Text style={styles.content.description}>This is the description {lorem}</Text>
      </View>
      <View style={styles.content}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity style={[styles.content.button,{backgroundColor:palette.dark+'8f'}]}>
                            <Text style={styles.content.button.text}>Preview</Text></TouchableOpacity>
        {state=="Published"?
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
const lorem="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
let r = {
  id:123,
  username:"Someone",
  stars:4.1,
  date:"3 February 2024",
  image:null,
  description:lorem,
}