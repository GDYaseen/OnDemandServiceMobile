import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { palette, screenHeightPx, screenWidthPx, windowHeightPx, windowWidthPx } from '../config';

const LoadingSpinner = () => {
    const spinValue = useRef(new Animated.Value(0)).current;
    const spinValue1 = useRef(new Animated.Value(0)).current;
    const spinValue2 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 2500,
                useNativeDriver: true,
            })).start();
    }, [spinValue]);
    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue1, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            })).start();
    }, [spinValue1]);
    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue2, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            })
        ).start();
    }, [spinValue2]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    const spin1 = spinValue1.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    const spin2 = spinValue2.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.spinner, { borderColor:palette.primary,transform: [{ rotate: spin }] }]}/>
            <Animated.View style={[styles.spinner, { borderColor:palette.secondary,transform: [{ rotate: spin1 }] }]}/>
            <Animated.View style={[styles.spinner, { borderColor:'white',transform: [{ rotate: spin2 }] }]}/>
        </View>
    );
};
const LoadingScreen = ({isActive})=>{
    return (
        <View style={{flex:1,
            position:'absolute',
            display:isActive?"flex":'none',
            height:screenHeightPx,
            width:screenWidthPx,
            backgroundColor:"#0000002f",
        }}>
            {isActive?<LoadingSpinner />:null}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative'
    },
    spinner: {
        position:"absolute",
        width: 50,
        height: 50,
        borderRadius: 25,
        borderTopWidth:5,
        borderLeftWidth:5,
    }
});

export default {LoadingSpinner,LoadingScreen};
