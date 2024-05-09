import { StyleSheet,TextInput, Text, View ,Image,TouchableOpacity,ImageBackground,Platform} from 'react-native';
import React, {useState,useEffect, useContext} from 'react';
import authBackground from '../../assets/images/authBackground.png';
import logo from '../../assets/logos/logo.png';
import {callApi, commonStyles,palette,screenHeightPx,windowHeightPx,windowWidthPx} from '../config';

import Contexter from '../contexter';

export default function LoginPage({navigation}){
    const [usernameEmail, setUsernameEmail] = useState("");
    const [password,setPassword] = useState("");
    const context = useContext(Contexter)
    async function verifyAndLogin(){
      try {
        context.setLoadingActive(true)
        const response = await callApi("/client/login",'post',{email:usernameEmail,password:password},{})
        if(response.status==200) {navigation.navigate("Main")}
          else {alert("Invalid credentials")}
      } 
      catch (error) {
        console.log('Failed to fetch data',error);
      }
       finally {
        context.setLoadingActive(false)
      }
    }
    return (
        <View style={styles.container}>
          <ImageBackground source={authBackground} style={styles.backgroundImage} resizeMode="cover">
          <Image style={styles.logo} source={logo}></Image>
        <TextInput
          style={styles.input}
          placeholder="Username or email"
          // value={usernameEmail}
          onSubmitEditing={ev => setUsernameEmail(ev.nativeEvent.text)} // useEffect will get triggered because of re-rendering if you didnt use useRef
          />
        <TextInput
          secureTextEntry={true}
          style={[styles.input,password!="" && password.length<8 && {borderColor:'#e00'}]}
          placeholder="Password"
          onSubmitEditing={ev => setPassword(ev.nativeEvent.text)}
          />
        <TouchableOpacity onPress={() => verifyAndLogin()} style={[styles.button,styles.button.login,{marginTop:30}]}>
          <Text style={styles.button.login.text}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={[styles.button,styles.button.signup,{marginBottom:30}]}>
          <Text style={styles.button.signup.text}>Sign up</Text>
        </TouchableOpacity>
          </ImageBackground>
          
    {/* <Loading.LoadingScreen isActive={context.loadingActive}/> */}
      </View>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    input:{
      marginBottom:10,
      borderRadius:19,
      borderColor:palette["primary"],
      backgroundColor:'white',
      borderWidth:1,
      height:40,
      width:windowWidthPx - 40,
      paddingLeft:20
    },
    button:{
      login:{
        text:{
          color:'white'
        },
        backgroundColor:palette["primary"],
      },
      signup:{
        text:{
          color:palette["primary"]
        }
      },
      marginBottom:10,
      padding:10,
      borderRadius:20,
      width:windowWidthPx-40,
      alignItems:'center',
      borderColor:palette["primary"],
      borderWidth:1,
    },
    logo:{
      width:windowWidthPx *2/3,
      height:windowWidthPx *2/3,
      marginBottom:windowWidthPx < 380? 40:150
    },


    container:commonStyles.container,
  });
  