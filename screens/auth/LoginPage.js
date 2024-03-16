import { StyleSheet,TextInput, Text, View ,Button,TouchableOpacity,ImageBackground,Platform} from 'react-native';
import React, {useState,useEffect} from 'react';
import authBackground from '../../assets/images/authBackground.png';
export default function LoginPage({navigation}){
    const [usernameEmail, setUsernameEmail] = useState(null);
    const [password,setPassword] = useState("");
  
    return (
        <View style={styles.container}>
          <ImageBackground source={authBackground} style={styles.backgroundImage} resizeMode="cover">
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
        <TouchableOpacity  style={[styles.button,styles.button.login,{marginTop:30}]}>
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
    container: {
      flex: 1,
    },
    input:{
      marginBottom:10,
      borderRadius:20,
      borderColor:'#0abfb9',
      backgroundColor:'white',
      borderWidth:1,
      height:40,
      width:320,
      paddingLeft:20
    },
    button:{
      login:{
        text:{
          color:'white'
        },
        backgroundColor:'#0abfb9',
      },
      signup:{
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
  