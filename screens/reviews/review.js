import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, Animated, TouchableOpacity, Image, Touchable } from 'react-native';

import profilePng from '../../assets/images/account.png';
import { palette,windowWidthPx } from '../config';
export default function Review({review,navigation}){
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("ReviewDetails",{_review:review})}style={styles.container}>
            <View style={styles.reviewer} >
                <Image style={styles.reviewer.image} source={review.image?review.image:profilePng}/>
                <Text style={styles.reviewer.username}>{review.username}</Text>
            </View>
            <Text style={styles.description} numberOfLines={7} ellipsizeMode="tail">{review.description}</Text>
            <View style={{flexDirection:'row',alignItems:'center',padding:5}}>
                <Text style={styles.starsAndDate}>{review.stars} ⭐</Text>
                <Text style={[styles.starsAndDate,{color:palette.dark+'4f',position:'absolute',right:5}]}>{review.date}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:windowWidthPx-70,
        borderRadius:10,
        marginRight:10,
        marginBottom:15,
        shadowColor: '#171717',
        elevation: 5,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    reviewer:{
        alignItems:'center',
        height:40,
        overflow:'hidden',
        flexDirection:'row',
        image:{
            width:35,
            height:35,
            marginLeft:5,
            marginRight:5
        },
        username:{
            fontFamily:'Raleway-SemiBold',
            fontSize:14
        }
    },
    description:{
        textAlign:'justify',
        padding:10,
        fontFamily:'Raleway-Regular'
    },
    starsAndDate:{
        fontFamily:'Montserrat-Regular',
    }
})