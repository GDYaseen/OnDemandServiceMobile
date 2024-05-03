import { StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated,ScrollView} from 'react-native';
import React, {useState,useEffect,useRef,useCallback, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {commonStyles,palette,screenHeightPx,windowHeightPx,windowWidthPx} from '../config';
import Sidebar from '../components/Sidebar';
import SvgMaker from '../components/SvgMaker'


import { NavigationContainer } from '@react-navigation/native';
import Contexter from '../contexter';
import {SafeAreaView} from 'react-native-safe-area-context';
import profilePng from '../../assets/images/account.png'
import HideableText from '../components/HideableText';

export default function ProfilePage({navigation}){

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isTextVisible, setTextVisible] = useState(false);
    return(
        <ScrollView contentContainerStyle={{flexGrow:1,
        paddingBottom:50}}>
            <TouchableOpacity style={styles.sidebarButton} onPress={() => setSidebarOpen(!sidebarOpen)}>
                    <SvgMaker source='barsSolid' fill={palette.secondary} width={30} height={30}/>
                </TouchableOpacity>
            <View style={{width:50,height:50,position:'absolute',right:0,margin:5,borderRadius:25,backgroundColor:palette.dark}}>
                <TouchableOpacity style={styles.edit} onPress={()=>navigation.navigate("ProfileEdit")} >
                    <SvgMaker  source={'edit'} width={20} height={20} fill={"#fff"} />
                </TouchableOpacity>
            </View>
            <View style={styles.profile}>
                <Image source={profilePng} 
                    style={styles.profile.image} />
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.detail}><Text style={styles.detail.title}>First Name:</Text><Text style={styles.detail.value}>myFirstName</Text></View>
                <View style={styles.detail}><Text style={styles.detail.title}>Last Name:</Text><Text style={styles.detail.value}>myLastName</Text></View>
            </View>
            <View style={styles.detail}><Text style={styles.detail.title}>Id Card:</Text>
                    <Text style={styles.detail.value}>NE4232832</Text></View>
            <View style={styles.detail}><Text style={styles.detail.title}>Phone Number:</Text>
                    <Text style={styles.detail.value}>+212 6 42328329</Text></View>
            <View style={styles.detail}><Text style={styles.detail.title}>Date of birth:</Text>
                    <Text style={styles.detail.value}>2002-1-1</Text></View>
            <View style={styles.detail}><Text style={styles.detail.title}>Email:</Text>
                    <Text style={styles.detail.value}>something@somewhere.com</Text></View>
            <View style={styles.detail}><Text style={styles.detail.title}>Joined in:</Text>
                    <Text style={styles.detail.value}>20022-11-21</Text></View>
            <View style={styles.detail}><Text style={styles.detail.title}>Password:</Text>
            <View style={{flexDirection:'row'}}>
            <HideableText style={styles.detail.value} initialText={"AwesomePassword"} isTextVisible={isTextVisible}/>
                    <TouchableOpacity style={styles.eye} onPress={() => setTextVisible(!isTextVisible)}>
                    <SvgMaker  source={'eye'} width={20} height={20} fill={palette.primary} />
                    </TouchableOpacity>
            </View>
      </View>
                    


            <Sidebar selectedPage={"Profile"} isOpen={sidebarOpen} turnOffSidebar={setSidebarOpen}/>
            <StatusBar hidden={true}/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    profile:{
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
        sidebarButton:{
            position:'absolute',
            top:0,
            left:0,
            justifyContent:'center',
            alignItems:'center',
            width:50,
            height:50,
            marginLeft:10,
            marginRight:10
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
    maxHeight:60,
    flex:1,
    title:{
        fontFamily:'Raleway-Regular',
        color:palette.dark
    },
    value:{
        fontFamily:'Montserrat-Light',
        color:palette.primary
    }
  }
})