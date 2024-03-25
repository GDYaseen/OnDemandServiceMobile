import { StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,ImageBackground,Platform} from 'react-native';
import React, {useState,useEffect} from 'react';

import sideBarImg from '../assets/icon.png';
import {commonStyles,palette} from './config';
import Sidebar from './components/Sidebar';

export default function Main({navigation}){
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    return (
        
        <View style={{flex:1}}>
            <View style={styles.topBar}>
                <TouchableOpacity style={[{marginLeft:10},styles.sidebarButton]} onPress={() => setSidebarOpen(!sidebarOpen)}>
                    <Image style={styles.sidebarButton} source={sideBarImg}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text>hello</Text>
            </View>
            <Sidebar isOpen={sidebarOpen} turnOffSidebar={setSidebarOpen}/>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar:{
        // marginTop:20,
        justifyContent:'center',
        height:60,
        backgroundColor:palette["dark"]
    },
    sidebarButton:{
        width:50,
        height:50
    }
  });
