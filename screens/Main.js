import {SafeAreaView, StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';
import { StatusBar } from 'expo-status-bar';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {commonStyles,palette} from './config';
import Sidebar from './components/Sidebar';
import SvgMaker from './components/SvgMaker'


import { NavigationContainer } from '@react-navigation/native';
import ServicesPage from './services/servicesPage';

const Stack = createNativeStackNavigator();
export default function Main({navigation}){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [openedTab,setOpenedTab]= useState('Services')
    const navigationRef = useRef();
    const navigateToScreen = (screenName) => {
    navigationRef.current?.navigate(screenName);
  };
    return (
        <View style={{flex:1,position:'relative'}}>
            <View style={styles.topBar}>
                <View style={styles.sideBarAndSearch}>
                <TouchableOpacity style={styles.sideBarAndSearch.sidebarButton} onPress={() => setSidebarOpen(!sidebarOpen)}>
                    <SvgMaker source='barsSolid' fill={palette.secondary+"6f"} width={30} height={30}/>
                </TouchableOpacity>
                <TextInput style={styles.sideBarAndSearch.search} placeholder="Search service or seller"/>
                </View>



                <View style={styles.tabs}>
                <TouchableOpacity style={[openedTab=='Services'?styles.tabs.tab.selectedTab:null,styles.tabs.tab]} onPress={() => {setOpenedTab('Services');navigateToScreen('Services')}}>
                    <SvgMaker source='services' fill={openedTab=='Services'?palette.secondary+"6f":palette["dark"]+"4f"} width={20} height={20}/>
                    <Text style={openedTab=='Services'?styles.tabs.tab.selectedTab.text:styles.tabs.tab.text}> Services</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[openedTab=='Appointments'?styles.tabs.tab.selectedTab:null,styles.tabs.tab]} onPress={() => {setOpenedTab('Appointments');navigateToScreen('Register')}}>
                    <SvgMaker source='calendar' fill={openedTab=='Appointments'?palette.secondary+"6f":palette["dark"]+"4f"} width={15} height={15}/>
                    <Text style={openedTab=='Appointments'?styles.tabs.tab.selectedTab.text:styles.tabs.tab.text}> Appointments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[openedTab=='Gigs'?styles.tabs.tab.selectedTab:null,styles.tabs.tab]} onPress={() => {setOpenedTab('Gigs')}}>
                    <SvgMaker source='wrench' fill={openedTab=='Gigs'?palette.secondary+"6f":palette["dark"]+"4f"} width={20} height={20}/>
                    <Text style={openedTab=='Gigs'?styles.tabs.tab.selectedTab.text:styles.tabs.tab.text}> Gigs</Text>
                </TouchableOpacity>
                </View>
            </View>


            <View style={{width:360,height:'100%'}}>
                <NavigationContainer independent={true} ref={navigationRef}>
                <Stack.Navigator initialRouteName="Services" screenOptions={{headerShown: false,gestureEnabled: true}}>
                    <Stack.Screen name="Services" component={ServicesPage} />
                </Stack.Navigator>
                </NavigationContainer>
            </View>
            <Sidebar isOpen={sidebarOpen} turnOffSidebar={setSidebarOpen}/>
            <StatusBar hidden={true}/>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar:{
        justifyContent:'center',
        height:100,
        borderColor:palette["dark"]+"0f",
        borderBottomWidth:1,
    },
    sideBarAndSearch:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        sidebarButton:{
            width:30,
            height:30,
            marginLeft:10,
            marginRight:10
        },
        search:{
            borderRadius:20,
            borderColor:palette["dark"]+"13",
            backgroundColor:'white',
            borderWidth:1,
            height:40,
            width:300,
            paddingLeft:20
        }
    },
    tabs:{
        flex:1,
        flexDirection:'row',
        justifyContent:'stretch',
        alignItems:'flex-end',
        tab:{
            flexDirection:'row',
            paddingBottom:15,
            width:120,
            alignItems:'center',
            justifyContent:'center',
            text:{
                fontSize:15,
                color:palette["dark"]+"4f",
                fontFamily:'Montserrat-Light'
            },
            selectedTab:{
                borderBottomWidth:2,
                borderColor:palette["secondary"],
                text:{
                    fontSize:15,
                    color:palette["secondary"],
                    fontFamily:'Montserrat-SemiBold'
                }
            }
        },
    }
  });