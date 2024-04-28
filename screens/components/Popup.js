import React, { useState } from 'react';
import { View, Modal, Text, Button, StyleSheet } from 'react-native';

const Popup = ({visible,content}) => {
    const [modalVisible, setModalVisible] = useState(visible);

    return (
        <View style={styles.centeredView}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                {content}
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    }
});

export default Popup;
