import React, { useState, useRef ,useContext} from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity,Image} from 'react-native';
import {windowWidthPx,windowHeightPx,palette} from '../config'

import profilePng from '../../assets/images/account.png'
import SidebarElement from './sidebarElement';
import Contexter from '../contexter';

const Sidebar = ({ isOpen ,turnOffSidebar}) => {
  // Animation value for the sidebar position
  const context = useContext(Contexter)
  const position = useRef(new Animated.Value(-windowWidthPx*0.694)).current; // Start off-screen
  const sidebarTurnOffColor = useRef(new Animated.Value(0.5)).current; // Start off-screen

  function disconnect(){
    context.nav.goBack()
  }

  // Run the animation when the isOpen changes
  React.useEffect(() => {
    Animated.timing(position, {
      toValue: isOpen ? 0 : -windowWidthPx*0.694, // Move into view or out of view
      duration: 300, // Duration of the animation
      useNativeDriver: true, // Use native driver for better performance
    }).start();
    Animated.timing(sidebarTurnOffColor, {
      toValue: isOpen ? 0.5 : 0, // Move into view or out of view
      duration: 300, // Duration of the animation
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, [isOpen, sidebarTurnOffColor]);
  const backgroundColorInterpolation = sidebarTurnOffColor.interpolate({
    inputRange: [0, 0.5],
    outputRange: ['rgba(16,16,16,0)', 'rgba(16,16,16,0.5)'], // From fully transparent to semi-transparent
  });
  return (
    <View style={{flex:1}}>
    <Animated.View
      style={[styles.sidebar,{transform: [{ translateX: position }],},]}>
      <TouchableOpacity onPress={()=>turnOffSidebar(false)} style={[styles.sidebarClickoff,
                          {backgroundColor:backgroundColorInterpolation,width:isOpen ? windowWidthPx:0}]}>
      </TouchableOpacity>
            <View style={styles.profile}>
                <Image source={profilePng} 
                    style={styles.profile.image} />
                <Text style={styles.profile.username}>User's name</Text>
            </View>
            <View style={{width:'100%',marginTop:10}}>
              <SidebarElement image={"analytics"} elementName={"Analytics"} isSelected={false}/>
              <SidebarElement image={"analytics"} elementName={"Analytics"} isSelected={true}/>
              <SidebarElement image={"analytics"} elementName={"Analytics"} isSelected={false}/>
            </View>
            <TouchableOpacity style={styles.disconnect} onPress={disconnect}>
                <Text style={styles.disconnect.logout}>Log out</Text></TouchableOpacity>
    </Animated.View>
      </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position:'absolute',
    left: 0,
    top: -windowHeightPx-100,
    bottom: 0,
    width: windowWidthPx*0.694,
    backgroundColor: palette.dark,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  profile:{
    alignItems:'center',
    width:'100%',
    image:{
      width:windowWidthPx*0.694/2,
      height:windowWidthPx*0.694/2,
      borderRadius:windowWidthPx*0.694/4,
      margin:5,
      borderColor:palette.secondary,
      borderWidth:1,
      marginTop:10,
    },
    username:{
      fontFamily:'Montserrat-Light',
      fontSize:23,
      color:'white'
    }
  },
  sidebarClickoff:{
    position:'absolute',
    left:windowWidthPx*0.694,
    bottom:0,
    top:0,
    flex:1,
    width:windowWidthPx/3
  },
  disconnect:{
    backgroundColor:palette.secondary,
    width:'80%',
    height:40,
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:10,
    position:'absolute',
    bottom:110,
    logout:{
      color:'white',
      alignSelf:'center',
      fontFamily:'Raleway-SemiBold'
    }
  }
});

export default Sidebar;
