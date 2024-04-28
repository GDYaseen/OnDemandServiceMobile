import React, { useState, useRef } from 'react';
import { Animated, View , Button, StyleSheet,TouchableOpacity} from 'react-native';
import { screenHeightPx, windowHeightPx,windowWidthPx } from '../config';

const BottomSlideUp = ({isOpen,turnOffBottomBar,content}) => {
    const translateY = useRef(new Animated.Value(0)).current;
    const bottombarTurnOffColor = useRef(new Animated.Value(0.5)).current;
    const [ZIndex, setZIndex] = useState(-1);

    React.useEffect(() => {
        if(isOpen)
            setZIndex(1)
        else{
            setTimeout(()=>setZIndex(-1),300)
        }
        Animated.spring(translateY, {
            toValue: isOpen ? 0 : content.height, 
            useNativeDriver: true
        }).start();
        Animated.timing(bottombarTurnOffColor, {
            toValue: isOpen ? 0.5 : 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
    }, [isOpen,bottombarTurnOffColor,content.height]);

    
    const backgroundColorInterpolation = bottombarTurnOffColor.interpolate({
        inputRange: [0, 0.5],
        outputRange: ['rgba(16,16,16,0)', 'rgba(16,16,16,0.5)'],
      });

    return (
        <View style={[styles.container,{zIndex:ZIndex}]}>
            <Animated.View style={[styles.animatedContainer, { transform: [{ translateY }] }]}>
                <TouchableOpacity
                    onPress={() => turnOffBottomBar(false)}
                    style={[styles.bottombarClickoff, { backgroundColor: backgroundColorInterpolation, height: isOpen ? windowHeightPx : 0 }]}
                >
                </TouchableOpacity>
                <View style={[styles.animatedView, { height: content.height}]}>
                    {content.components}
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:-screenHeightPx,
        // backgroundColor:'red',
        height:windowHeightPx,
        zIndex:-4,
        // flexDirection:'column-reverse'
    },
    animatedContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    animatedView: {
        width: windowWidthPx,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        // overflow:'hidden'
    },
    bottombarClickoff:{
        position: 'absolute',
        bottom: 140,
        width: windowWidthPx,
      }
});

export default BottomSlideUp;
