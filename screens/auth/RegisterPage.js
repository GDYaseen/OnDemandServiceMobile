import { StyleSheet,TextInput, Text, View ,Image,ImageBackground,TouchableOpacity} from 'react-native';
import React, {useState,useEffect} from 'react';
import authBackground from '../../assets/images/authBackground.png';
import logo from '../../assets/logos/logo-letter-2.png';

export default function RegisterPage({navigation}){
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
    const [password,setPassword] = useState("");
  
    return (
      <View style={styles.container}>
        <ImageBackground source={authBackground} style={styles.backgroundImage} resizeMode="cover">
        <Image style={styles.logo} source={logo}></Image>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onSubmitEditing={ev => setUsername(ev.nativeEvent.text)} // useEffect will get triggered because of re-rendering if you didnt use useRef
        />
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
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.button,styles.button.login]}>
          <Text style={styles.button.login.text}>Have an account? Sign in</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
  logo:{
    width:198,
    height:138,
    marginBottom:90
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
      borderColor:'#0abfb9',
      backgroundColor:'white',
      borderWidth:1,
      height:40,
      width:320,
      paddingLeft:20
    },
    button:{
      signup:{
        text:{
          color:'white'
        },
        backgroundColor:'#0abfb9',
      },
      login:{
        text:{
          color:'#0abfb9'
        }
      },
      marginBottom:10,
      padding:10,
      borderRadius:20,
      width:320,
      alignItems:'center',
      borderColor:"#0abfb9",
      borderWidth:1,
    }
  });
  