import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,TextInput, Text, View ,Button,TouchableOpacity} from 'react-native';
import React, {useState,useEffect,useContext} from 'react';
import LoginPage from './screens/auth/LoginPage';
import RegisterPage from './screens/auth/RegisterPage';
import Main from './screens/Main';
import ServiceDetails from './screens/services/serviceDetails';
import {commonStyles,palette,loadFonts, screenHeightPx} from './screens/config';
import ReviewDetails from './screens/reviews/reviewDetails';
import Contexter from './screens/contexter';
import BottomSlideUp from './screens/components/BottomSlideUp'
import GigDetails from './screens/gigs/gigDetails';
import GigEdit from './screens/gigs/gigEdit';
import Loading from './screens/components/loading';
import ProfilePage from './screens/profile/profilePage';
import ProfileEdit from './screens/profile/profileEdit';
const Stack = createNativeStackNavigator();

export default function App() {
  
  loadFonts()
  const context = useContext(Contexter)
  const [bottomBarOpen, setBottomBarOpen] = useState(false);
  const [bottomBarContent, setBottomBarContent] = useState({height:0,components:<></>});
  context.bottomPopup = {bottomBarOpen,setBottomBarOpen,bottomBarContent,setBottomBarContent}
  
  return (
    <View style={{ zIndex:1,flex:1}}>
      <Contexter.Provider value={context}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Main" component={Main} /> 
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} /> 
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} /> 
        <Stack.Screen name="GigDetails" component={GigDetails} /> 
        <Stack.Screen name="GigEdit" component={GigEdit} /> 
        <Stack.Screen name="ProfilePage" component={ProfilePage} /> 
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} /> 
      </Stack.Navigator>
    </NavigationContainer>
      </Contexter.Provider>
    <BottomSlideUp isOpen={bottomBarOpen} content={bottomBarContent}  turnOffBottomBar={setBottomBarOpen}/>
    <Loading.LoadingScreen isActive={false}/>
    <StatusBar style="light" hidden={false} />
    
    </View>
  );  
}

const screenOptions={
  headerShown: false,
  gestureEnabled: true,
}