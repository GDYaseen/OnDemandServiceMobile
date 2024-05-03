import { StyleSheet,TextInput, Text,View ,Image,TouchableOpacity,Platform,Animated} from 'react-native';
import React, {useState,useEffect,useRef,useCallback, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {commonStyles,palette,windowHeightPx,windowWidthPx} from './config';
import Sidebar from './components/Sidebar';
import SvgMaker from './components/SvgMaker'


import { NavigationContainer } from '@react-navigation/native';
import ServicesPage from './services/servicesPage';
import AppointmentsPage from './appointments/appointmentsPage';
import NotProvider from './gigs/notProvider';
import Contexter from './contexter';
import {SafeAreaView} from 'react-native-safe-area-context';
import CategoryPage from './services/categoryPage';
import GigsPage from './gigs/gigsPage';

const Stack = createNativeStackNavigator();
export default function Main({navigation}){
    const context = useContext(Contexter)

    const navigationRef = useRef();
    const navigateToScreen = (screenName) => {
        if(screenName!="Categories"){
            setOpenedTab(screenName)
        }
        navigationRef.current?.navigate(screenName);
    };

    const [openedTab, setOpenedTab] = useState('Services')
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    const handleNavigationChange = () => {
        const route = navigationRef.current?.getCurrentRoute();
        if (route) {
            if(route.name!='Categories')
                setOpenedTab(route.name);
            context.bottomPopup.setBottomBarOpen(false)
            context.bottomPopup.setBottomBarContent({height:0,components:<></>})
        }
    };
    
    context.nav=navigation
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.topBar}>
                <View style={styles.sideBarAndSearch}>
                <TouchableOpacity style={styles.sideBarAndSearch.sidebarButton} onPress={() => setSidebarOpen(!sidebarOpen)}>
                    <SvgMaker source='barsSolid' fill={palette.secondary+"6f"} width={30} height={30}/>
                </TouchableOpacity>
                <TextInput style={styles.sideBarAndSearch.search} placeholder="Search service or seller"/>
                </View>



                <View style={styles.tabs}>
                <TouchableOpacity style={[openedTab=='Services'?styles.tabs.tab.selectedTab:null,styles.tabs.tab]} onPress={() => {navigateToScreen('Services')}}>
                    <SvgMaker source='services' fill={openedTab=='Services'?palette.secondary+"6f":palette["dark"]+"4f"} width={20} height={20}/>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={openedTab=='Services'?styles.tabs.tab.selectedTab.text:styles.tabs.tab.text}> Services</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[openedTab=='Appointments'?styles.tabs.tab.selectedTab:null,styles.tabs.tab]} onPress={() => {navigateToScreen('Appointments')}}>
                    <SvgMaker source='calendar' fill={openedTab=='Appointments'?palette.secondary+"6f":palette["dark"]+"4f"} width={20} height={20}/>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={openedTab=='Appointments'?styles.tabs.tab.selectedTab.text:styles.tabs.tab.text}> Appointments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[openedTab=='Gigs'?styles.tabs.tab.selectedTab:null,styles.tabs.tab]} onPress={() => {navigateToScreen('Gigs')}}>
                    <SvgMaker source='wrench' fill={openedTab=='Gigs'?palette.secondary+"6f":palette["dark"]+"4f"} width={20} height={20}/>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={openedTab=='Gigs'?styles.tabs.tab.selectedTab.text:styles.tabs.tab.text}> Gigs</Text>
                </TouchableOpacity>
                </View>
            </View>


            <View style={{position:'relative',height:windowHeightPx}}>
                <NavigationContainer independent={true} ref={navigationRef} onStateChange={handleNavigationChange}>
                <Stack.Navigator initialRouteName="Services" screenOptions={{headerShown: false,gestureEnabled: true}}>
                    <Stack.Screen name="Services">
                        {props => <ServicesPage {...props} navigateTo={navigateToScreen} parentNav={navigation}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Appointments">
                        {props => <AppointmentsPage {...props} bottomBar={context.bottomPopup.setBottomBarOpen} bottomContent={context.bottomPopup.setBottomBarContent} parentNav={navigation}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Gigs">
                        {/* {props => <NotProvider {...props}/>} */}
                        {props => <GigsPage {...props} parentNav={navigation}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Categories">
                        {props => <CategoryPage {...props}/>}
                    </Stack.Screen>
                </Stack.Navigator>
                </NavigationContainer>
            </View>
                <Sidebar selectedPage={"Home"} isOpen={sidebarOpen} turnOffSidebar={setSidebarOpen}/>
            <StatusBar hidden={true}/>
        </SafeAreaView>
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
        // flex:1,
        height:50,
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
            width:windowWidthPx-60,
            paddingLeft:20
        }
    },
    tabs:{
        flex:1,
        flexDirection:'row',
        justifyContent:'stretch',
        alignItems:'flex-end',
        tab:{
            height:48,
            flexDirection:'row',
            width:windowWidthPx/3,
            alignItems:'center',
            justifyContent:'center',
            text:{
                fontSize:windowWidthPx/30,
                color:palette["dark"]+"4f",
                fontFamily:'Montserrat-Light'
            },
            selectedTab:{
                borderBottomWidth:2,
                backgroundColor:palette.secondary+'12',
                borderColor:palette["secondary"],
                text:{
                    fontSize:windowWidthPx/30,
                    color:palette["secondary"],
                    fontFamily:'Montserrat-SemiBold'
                }
            }
        },
    }
  });