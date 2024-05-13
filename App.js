import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, TextInput, Text, View, Button, TouchableOpacity, ActivityIndicator} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import LoginPage from "./screens/auth/LoginPage";
import RegisterPage from "./screens/auth/RegisterPage";
import Main from "./screens/Main";
import ServiceDetails from "./screens/services/serviceDetails";
import { commonStyles, palette, loadFonts, screenHeightPx, getData } from "./screens/config";
import ReviewDetails from "./screens/reviews/reviewDetails";
import Contexter from "./screens/contexter";
import BottomSlideUp from "./screens/components/BottomSlideUp";
import GigDetails from "./screens/gigs/gigDetails";
import GigEdit from "./screens/gigs/gigEdit";
import Loading from "./screens/components/loading";
import ProfilePage from "./screens/profile/profilePage";
import ProfileEdit from "./screens/profile/profileEdit";
import AnalyticsPage from "./screens/analytics/analyticsPage";
import ProviderDetails from "./screens/profile/providerDetails";
import OrdersPage from "./screens/orders/ordersPage";

const Stack = createNativeStackNavigator();
export default function App() {
  let fonts = loadFonts();
  const context = useContext(Contexter);
  const [bottomBarOpen, setBottomBarOpen] = useState(false);
  const [loadingActive, setLoadingActive] = useState(true);
  const [bottomBarContent, setBottomBarContent] = useState({height: 0,components: <></>});
  const [initialRoute, setInitialRoute] = useState(null);
  context.bottomPopup = {bottomBarOpen,setBottomBarOpen,bottomBarContent,setBottomBarContent};
  context.setLoadingActive = setLoadingActive;

  useEffect(() => {
    async function checkStorage() {
      console.log("searching token");
      const token = await getData("token");
      const userType = await getData("userType");
      const currentUser = await getData("currentUser");
      if (token) {
        context.token = token;
        context.userType = userType
        context.currentUser = currentUser
        setInitialRoute("Main");
      } else {
        setInitialRoute("Login");
      }
      setLoadingActive(false);
    }
    checkStorage();    
  }, []);
  if (!initialRoute || !fonts) {
    return <Loading.LoadingScreen isActive={loadingActive} />;
  }

  return (
    <View style={{ zIndex: 1, flex: 1 }}>
      <Contexter.Provider value={context}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={initialRoute} screenOptions={screenOptions} >
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Register" component={RegisterPage} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
            <Stack.Screen name="ProviderDetails" component={ProviderDetails} />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
            <Stack.Screen name="GigDetails" component={GigDetails} />
            <Stack.Screen name="GigEdit" component={GigEdit} />
            <Stack.Screen name="ProfilePage" component={ProfilePage} />
            <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
            <Stack.Screen name="AnalyticsPage" component={AnalyticsPage} />
            <Stack.Screen name="OrdersPage" component={OrdersPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </Contexter.Provider>
      <Loading.LoadingScreen isActive={loadingActive} />
      <BottomSlideUp isOpen={bottomBarOpen} content={bottomBarContent} turnOffBottomBar={setBottomBarOpen} />
      <StatusBar style="light" hidden={false} />
    </View>
  );
}

const screenOptions = {
  headerShown: false,
  gestureEnabled: true,
};
