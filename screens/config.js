import { useFonts } from 'expo-font';
import { Dimensions } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

function loadFonts(){
    const [fontsLoaded] = useFonts({
        'Montserrat-Thin': require('../assets/fonts/Montserrat/Montserrat-Thin.ttf'),
        'Montserrat-Light': require('../assets/fonts/Montserrat/Montserrat-Light.ttf'),
        'Montserrat-Black': require('../assets/fonts/Montserrat/Montserrat-Black.ttf'),
        'Montserrat-BlackItalic': require('../assets/fonts/Montserrat/Montserrat-BlackItalic.ttf'),
        'Montserrat-ExtraBold': require('../assets/fonts/Montserrat/Montserrat-ExtraBold.ttf'),
        'Montserrat-ExtraBoldItalic': require('../assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf'),
        'Montserrat-ExtraLight': require('../assets/fonts/Montserrat/Montserrat-ExtraLight.ttf'),
        'Montserrat-LightItalic': require('../assets/fonts/Montserrat/Montserrat-LightItalic.ttf'),
        'Montserrat-ExtraLightItalic': require('../assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf'),
        'Montserrat-Italic': require('../assets/fonts/Montserrat/Montserrat-Italic.ttf'),
        'Montserrat-Medium': require('../assets/fonts/Montserrat/Montserrat-Medium.ttf'),
        'Montserrat-MediumItalic': require('../assets/fonts/Montserrat/Montserrat-MediumItalic.ttf'),
        'Montserrat-Regular': require('../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
        'Montserrat-SemiBoldItalic': require('../assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf'),
        'Montserrat-SemiBold': require('../assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
        'Montserrat-BoldItalic': require('../assets/fonts/Montserrat/Montserrat-BoldItalic.ttf'),
        'Montserrat-ThinItalic': require('../assets/fonts/Montserrat/Montserrat-ThinItalic.ttf'),
        'Raleway-Thin': require('../assets/fonts/Raleway/Raleway-Thin.ttf'),
        'Raleway-Light': require('../assets/fonts/Raleway/Raleway-Light.ttf'),
        'Raleway-Black': require('../assets/fonts/Raleway/Raleway-Black.ttf'),
        'Raleway-BlackItalic': require('../assets/fonts/Raleway/Raleway-BlackItalic.ttf'),
        'Raleway-ExtraBold': require('../assets/fonts/Raleway/Raleway-ExtraBold.ttf'),
        'Raleway-ExtraBoldItalic': require('../assets/fonts/Raleway/Raleway-ExtraBoldItalic.ttf'),
        'Raleway-ExtraLight': require('../assets/fonts/Raleway/Raleway-ExtraLight.ttf'),
        'Raleway-LightItalic': require('../assets/fonts/Raleway/Raleway-LightItalic.ttf'),
        'Raleway-ExtraLightItalic': require('../assets/fonts/Raleway/Raleway-ExtraLightItalic.ttf'),
        'Raleway-Italic': require('../assets/fonts/Raleway/Raleway-Italic.ttf'),
        'Raleway-Medium': require('../assets/fonts/Raleway/Raleway-Medium.ttf'),
        'Raleway-MediumItalic': require('../assets/fonts/Raleway/Raleway-MediumItalic.ttf'),
        'Raleway-Regular': require('../assets/fonts/Raleway/Raleway-Regular.ttf'),
        'Raleway-SemiBoldItalic': require('../assets/fonts/Raleway/Raleway-SemiBoldItalic.ttf'),
        'Raleway-SemiBold': require('../assets/fonts/Raleway/Raleway-SemiBold.ttf'),
        'Raleway-Bold': require('../assets/fonts/Raleway/Raleway-Bold.ttf'),
        'Raleway-BoldItalic': require('../assets/fonts/Raleway/Raleway-BoldItalic.ttf'),
        'Raleway-ThinItalic': require('../assets/fonts/Raleway/Raleway-ThinItalic.ttf'),
    });
        return fontsLoaded
}
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data stored successfully!');
  } catch (error) {
    console.error('Error storing data:', error);
  }
};
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Retrieved data:', value);
      return value;
    } else {
      console.log('No data found for key:', key);
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};
const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Data removed successfully!');
  } catch (error) {
    console.error('Error removing data:', error);
  }
};

const callApi = async (url, method, data = null,headers) => {
  try {
    const response = await axios({url:"http://100.94.243.202/api/v1"+url,method, data ,headers,validateStatus:function(status){return true;}});
    // const response = await axios({url:"http://192.168.43.252/api/v1"+url,method, data ,headers,validateStatus:function(status){return true;}});
    return response;
  } catch (error) {
    alert('API call failed: ', error)
    console.error('API call failed: ', error);
    throw error;
  } 
};
function handleNavDispatch(page){
    return CommonActions.reset({
        index: 0,
        routes: [
          { name: page },
        ],
      })
}
const palette = {
    dark:       "#1b1b28",
    primary:    "#009EF7",//"#e46483",
    secondary:  "#ff9800",//"#1bc5bd",
    bright:     "#d7d7e3"
}
const commonStyles={
    container :{
        flex: 1
    }
}
const screenWidthPx = Dimensions.get('screen').width;
const screenHeightPx = Dimensions.get('screen').height;
const windowWidthPx = Dimensions.get('window').width;
const windowHeightPx = Dimensions.get('window').height;

export {commonStyles,palette,windowWidthPx,screenWidthPx,windowHeightPx,screenHeightPx,
            loadFonts,handleNavDispatch,callApi,storeData,getData,removeData}

