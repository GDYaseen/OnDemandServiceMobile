import { StyleSheet,TextInput, Text, View ,Image,ImageBackground,TouchableOpacity} from 'react-native';
import React, {useState,useEffect} from 'react';
import authBackground from '../../assets/images/authBackground.png';
import logo from '../../assets/logos/logo.png';

import {commonStyles,palette,windowWidthPx} from '../config';

export default function RegisterPage({navigation}){
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
    const [password,setPassword] = useState("");
  
    return (
      <View style={styles.container}>
        <ImageBackground source={authBackground} style={styles.backgroundImage} resizeMode="cover">
        <Image style={styles.logo} source={logo}></Image>

        <View style={{flexDirection:'row',justifyContent:'space-between',width:windowWidthPx - 40}}>

        <TextInput
          style={[styles.input,{width:windowWidthPx/1.9 - 40,}]}
          placeholder="First Name"
          onSubmitEditing={ev => setFirstname(ev.nativeEvent.text)} // useEffect will get triggered because of re-rendering if you didnt use useRef
          /><TextInput
          style={[styles.input,{width:windowWidthPx/1.9 - 40,}]}
          placeholder="Last Name"
          onSubmitEditing={ev => setLastname(ev.nativeEvent.text)} // useEffect will get triggered because of re-rendering if you didnt use useRef
          />
          </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onSubmitEditing={ev => setEmail(ev.nativeEvent.text)} // useEffect will get triggered because of re-rendering if you didnt use useRef
        />
        <TextInput
          secureTextEntry={true}
          style={[styles.input,password!="" && password.length<8 && {borderColor:'#e00'}]}
          placeholder="Password"
          onSubmitEditing={ev => setPassword(ev.nativeEvent.text)}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Main')} style={[styles.button,styles.button.signup]}>
          <Text style={styles.button.signup.text}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.button.providerLogin]}>
          <Text style={styles.button.providerLogin.text}>Sign up as a provider</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.button,styles.button.login]}>
          <Text style={styles.button.login.text}>Have an account? Sign in</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
  logo:{
    width:windowWidthPx *2/3,
    height:windowWidthPx *2/3,
    marginBottom:windowWidthPx < 380? 40:150
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
    container: {
      flex: 1
    },
    input:{
      marginBottom:10,
      borderRadius:15,
      borderColor:palette.primary,
      backgroundColor:'white',
      borderWidth:1,
      height:40,
      width:windowWidthPx - 40,
      paddingLeft:20
    },
    button:{
      signup:{
        text:{
          color:'white'
        },
        backgroundColor:palette.primary,
      },
      providerLogin:{
        text:{
          color:'white'
        },
        backgroundColor:palette["secondary"],
      },
      login:{
        text:{
          color:palette.primary
        }
      },
      marginBottom:10,
      padding:10,
      borderRadius:20,
      width:windowWidthPx-40,
      alignItems:'center',
      borderColor:palette.primary,
      borderWidth:1,
    }
  });
  