import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const Sidebar = ({ isOpen ,turnOffSidebar}) => {
  // Animation value for the sidebar position
  const position = useRef(new Animated.Value(-250)).current; // Start off-screen
  const sidebarTurnOffColor = useRef(new Animated.Value(0.5)).current; // Start off-screen

  // Run the animation when the isOpen changes
  React.useEffect(() => {
    Animated.timing(position, {
      toValue: isOpen ? 0 : -250, // Move into view or out of view
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
                          {backgroundColor:backgroundColorInterpolation,width:isOpen ? 360:0}]}>
      </TouchableOpacity>
      <Text style={styles.sidebarText}>I'm the sidebar!</Text>
    </Animated.View>
      </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position:'absolute',
    left: 0,
    top: -80,
    bottom: 0,
    width: 250,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  sidebarText: {
    fontSize: 18,
  },
  sidebarClickoff:{
    position:'absolute',
    left:250,
    bottom:0,
    top:0,
    flex:1,
    width:110
  }
});

export default Sidebar;
