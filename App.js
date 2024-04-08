import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,TextInput, Text, View ,Button,TouchableOpacity} from 'react-native';
import React, {useState,useEffect} from 'react';
import LoginPage from './screens/auth/LoginPage';
import RegisterPage from './screens/auth/RegisterPage';
import Main from './screens/Main';
import ServiceDetails from './screens/services/serviceDetails';
import {commonStyles,palette,loadFonts} from './screens/config';
const Stack = createNativeStackNavigator();

export default function App() {
  loadFonts()
  return (
    <View style={{ flex: 1}}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Main" component={Main} /> 
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} /> 
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="light" hidden={false}/>
    </View>
  );  
}

const screenOptions={
  headerShown: false,
  gestureEnabled: true,
}