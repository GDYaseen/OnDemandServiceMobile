import { StyleSheet,TextInput, Text, View ,Image,TouchableOpacity,ImageBackground,Platform} from 'react-native';
import React, {useState,useEffect} from 'react';
import authBackground from '../../assets/images/authBackground.png';
import logo from '../../assets/logos/logo.png';
import {commonStyles,palette,screenWidthPx} from '../config';

export default function LoginPage({navigation}){
    const [usernameEmail, setUsernameEmail] = useState(null);
    const [password,setPassword] = useState("");
  
    return (
        <View style={styles.container}>
          <ImageBackground source={authBackground} style={styles.backgroundImage} resizeMode="cover">
          <Image style={styles.logo} source={logo}></Image>
        <TextInput
          style={styles.input}
          placeholder="Username or email"
          onSubmitEditing={ev => setUsernameEmail(ev.nativeEvent.text)} // useEffect will get triggered because of re-rendering if you didnt use useRef
          />
        <TextInput
          secureTextEntry={true}
          style={[styles.input,password!="" && password.length<8 && {borderColor:'#e00'}]}
          placeholder="Password"
          onSubmitEditing={ev => setPassword(ev.nativeEvent.text)}
          />
        <TouchableOpacity onPress={() => navigation.navigate('Main')} style={[styles.button,styles.button.login,{marginTop:30}]}>
          <Text style={styles.button.login.text}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={[styles.button,styles.button.signup,{marginBottom:30}]}>
          <Text style={styles.button.signup.text}>Sign up</Text>
        </TouchableOpacity>
          </ImageBackground>
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
      width:screenWidthPx - 40,
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
      width:screenWidthPx-40,
      alignItems:'center',
      borderColor:palette["primary"],
      borderWidth:1,
    },
    logo:{
      width:screenWidthPx *2/3,
      height:screenWidthPx *2/3,
      marginBottom:screenWidthPx < 380? 40:150
    },


    container:commonStyles.container,
  });
  