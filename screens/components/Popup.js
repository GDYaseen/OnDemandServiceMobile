import React from 'react';
import { Modal, View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
import { palette, screenHeightPx } from '../config';
import { SafeAreaView } from 'react-native-safe-area-context';

const Popup = ({ visible, setModalVisible, content }) => {
    
    const translateY = React.useRef(new Animated.Value(300)).current; 
    React.useEffect(() => {
            Animated.spring(translateY, {
                toValue: visible?0:300,
                useNativeDriver: true,
            }).start();
    }, [visible]);
    
    return (
        <Modal
            statusBarTranslucent={true}
            animationType="none" // No animation for the modal itself
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setModalVisible(!visible);
            }}
        >
            <View style={styles.overlay}>
                <Animated.View style={[styles.modalContent, { transform: [{ translateY }] }]}>
                    {content}
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                        <Text style={{color:'white',fontFamily:'Montserrat-Regular'}}>Close</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>

        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        // height:screenHeightPx,
        position:'absolute',
        top:0,bottom:0,left:0,right:0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: palette.dark,
        padding: 20,
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    closeButton: {
        marginTop: 10,
        alignSelf: 'center',
        alignItems:'center',
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 5,
        width:'100%'
    }
});

export default Popup;
