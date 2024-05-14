import { StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated,ScrollView, Touchable} from 'react-native';
import React, {useState,useEffect,useRef,useCallback, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {commonStyles,palette,screenHeightPx,windowHeightPx,windowWidthPx} from '../config';
import Sidebar from '../components/Sidebar';
import SvgMaker from '../components/SvgMaker'
import ImageInput from '../components/ImageInput';

import { NavigationContainer } from '@react-navigation/native';
import Contexter from '../contexter';
import {SafeAreaView} from 'react-native-safe-area-context';
import profilePng from '../../assets/images/account.png'
import HideableText from '../components/HideableText';

export default function ProfileEdit({navigation,route}){
    const {profile} = route.params

    const [sidebarOpen, setSidebarOpen] = useState(false);
    // const [isTextVisible, setTextVisible] = useState(false);
    const [image, setImage] = useState(null);
  
    return(
        <ScrollView contentContainerStyle={{flexGrow:1,
        paddingBottom:50}}>
            <View style={{width:windowWidthPx,height:50,backgroundColor:palette.dark}}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.back} >
            <SvgMaker  source={'back'} width={20} height={20} fill={"#fff"} />
            </TouchableOpacity>
        </View>
            <View style={styles._profile}>
                <ImageInput aspect={[1,1]} type={'profile'} image={image} setImage={setImage} style={{height:150,backgroundColor:'lightgray',width:windowWidthPx}} ></ImageInput>
                {/* <Image source={profilePng} 
                    style={styles._profile.image} /> */}
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.detail}><Text style={styles.detail.title}>First Name:</Text><TextInput style={styles.detail.input}>{profile.first_name}</TextInput></View>
                <View style={styles.detail}><Text style={styles.detail.title}>Last Name:</Text><TextInput style={styles.detail.input}>{profile.last_name}</TextInput></View>
            </View>
            <View style={styles.detail}><Text style={styles.detail.title}>Id Card:</Text>
                    <TextInput style={styles.detail.input}>{profile.id_card}</TextInput></View>
            <View style={styles.detail}><Text style={styles.detail.title}>Phone Number:</Text>
                    <TextInput style={styles.detail.input}>{profile.phone_number}</TextInput></View>
            <View style={styles.detail}><Text style={styles.detail.title}>Date of birth:</Text>
                    <TextInput editable={false} style={styles.detail.input}>{profile.date_of_birth.slice(0,10)}</TextInput></View>
            <View style={styles.detail}><Text style={styles.detail.title}>Email:</Text>
                    <TextInput editable={false} style={[styles.detail.input,{backgroundColor:'lightgray'}]}>{profile.email}</TextInput></View>
            {/* <TouchableOpacity style={styles.detail.changePass}>
                <Text style={styles.detail.changePass.text}>Change password?</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={[styles.detail.saveButton,{backgroundColor:palette.secondary}]}>
                            <Text style={styles.detail.saveButton.text}>Save</Text></TouchableOpacity>


            <Sidebar selectedPage={"Profile"} isOpen={sidebarOpen} turnOffSidebar={setSidebarOpen}/>
            <StatusBar hidden={true}/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    _profile:{
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
          color:'black'
        }
      },
      back:{
        width:50,
        height:50,
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:"#000",
        elevation: 20,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
        zIndex:1,
      }, 
    edit:{
        width:50,
        height:50,
        position:'absolute',
        right:0,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:"#000",
        elevation: 20,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
        zIndex:1,
  },
  eye:{
    position:'absolute',
    right:0,
    justifyContent:'center',
    alignItems:'center',
},
  detail:{
    padding:10,
    maxHeight:70,
    minHeight:70,
    flex:1,
    title:{
        fontFamily:'Raleway-Regular',
        color:palette.dark
    },
    input:{
        fontFamily:'Montserrat-Light',
        color:palette.primary,
        flex:1,
        paddingLeft:5,
        paddingRight:5,
        fontSize:14,
        borderColor:palette.primary,
        borderRadius:5,
        borderWidth:1,
    },
    changePass:{
        text:{
            fontFamily:'Montserrat-Regular',
            color:palette.primary,
            fontSize:14,
            textDecorationLine:'underline'
        },
        margin:10,
    },
    saveButton:{
        // width:windowWidthPx*0.45,
        margin:10,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        text:{
            fontSize:15,
            fontFamily:'Montserrat-Regular',
            color:'white'
        }
    }
  }
})