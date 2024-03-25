import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,TextInput, Text, View ,Button,TouchableOpacity} from 'react-native';
import React, {useState,useEffect} from 'react';
import LoginPage from './screens/auth/LoginPage';
import RegisterPage from './screens/auth/RegisterPage';
import Main from './screens/Main';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <View style={{ flex: 1}}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>

    
    {/* <TouchableOpacity style={{backgroundColor:"#f00",position:'absolute',bottom:0,right:0}} >
        <Text>Toggle Sidebar</Text>
      </TouchableOpacity>
       */}
    <StatusBar/>
    </View>
  );  
}

const screenOptions={
  headerShown: false,
  gestureEnabled: true,

}