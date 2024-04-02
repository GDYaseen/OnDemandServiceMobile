import { useFonts } from 'expo-font';

function loadFonts(){
    const [fontsLoaded] = useFonts({
        'Montserrat-Thin': require('../assets/fonts/Montserrat-Thin.ttf'),
        'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-BlackItalic': require('../assets/fonts/Montserrat-BlackItalic.ttf'),
        'Montserrat-ExtraBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
        'Montserrat-ExtraBoldItalic': require('../assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
        'Montserrat-ExtraLight': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
        'Montserrat-LightItalic': require('../assets/fonts/Montserrat-LightItalic.ttf'),
        'Montserrat-ExtraLightItalic': require('../assets/fonts/Montserrat-ExtraLightItalic.ttf'),
        'Montserrat-Italic': require('../assets/fonts/Montserrat-Italic.ttf'),
        'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-MediumItalic': require('../assets/fonts/Montserrat-MediumItalic.ttf'),
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBoldItalic': require('../assets/fonts/Montserrat-SemiBoldItalic.ttf'),
        'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-BoldItalic': require('../assets/fonts/Montserrat-BoldItalic.ttf'),
        'Montserrat-ThinItalic': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
    });
    if(!fontsLoaded){
        return undefined
    }
}

const palette = {
    dark:       "#1b1b28",
    primary:    "#e46483",
    secondary:  "#1bc5bd",
    bright:     "#d7d7e3"
}
const commonStyles={
    container :{
        flex: 1
    }
}

export {commonStyles,palette,loadFonts}

