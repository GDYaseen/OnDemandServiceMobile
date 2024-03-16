import { StyleSheet,TextInput, Text, View ,Button,TouchableOpacity} from 'react-native';
import React, {useState,useEffect} from 'react';

export default function RegisterPage({navigation}){
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
    const [password,setPassword] = useState("");
  
    return (
      <View style={styles.container}>
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
        <TouchableOpacity  style={[styles.button,styles.button.signup]}>
          <Text style={styles.button.signup.text}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.button,styles.button.login]}>
          <Text style={styles.button.login.text}>Have an account? Sign in</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
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
  