import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, Animated, TouchableOpacity, Image, Touchable } from 'react-native';

import { palette,windowHeightPx,windowWidthPx } from '../config';
import profilePng from '../../assets/images/account.png'
export default function ReviewDetails({navigation,route}){
    const {_review} = route.params
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.back} >
                <SvgMaker  source={'back'} width={20} height={20} fill={"#fff"} />
            </TouchableOpacity>
            <View style={styles.reviewer}>
                <Image source={_review.image?_review.image:profilePng} style={styles.reviewer.image} />
                <Text style={styles.reviewer.sellerName}>{_review.client.first_name} {_review.client.last_name}</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',padding:5}}>
                <Text style={[styles.starsAndDate,{color:palette.dark+'4f'}]}>{_review.date}</Text>
                <Text style={[styles.starsAndDate,{position:'absolute',right:5}]}>{_review.stars} ⭐</Text>
            </View>
            <Text style={styles.description} >{_review.description}{_review.description}{_review.comment}{_review.description}{_review.description}</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    back:{
        width:windowWidthPx,
        height:50,
        backgroundColor:palette.dark+'3f',
        paddingTop:15,
        paddingLeft:20,
        zIndex:1,
      },
    reviewer:{
        borderBottomLeftRadius:10,borderBottomRightRadius:10,
        flexDirection:'row',
        alignItems:'center',
        image:{
          width:40,
          height:40,
          borderRadius:25,
          margin:5,
          borderColor:palette.primary,
          borderWidth:1
        },
        sellerName:{
          marginLeft:10,
          fontFamily:'Montserrat-Medium',
          fontSize:14,
          color:'black'
        }
      },
    description:{
        textAlign:'justify',
        paddingLeft:10,paddingRight:10,
        paddingBottom:30,
        fontFamily:'Raleway-Regular'
    },
    starsAndDate:{
        fontFamily:'Montserrat-Regular',
    }
})