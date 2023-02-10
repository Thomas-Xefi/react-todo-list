import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ValidateModal from './validate-modal';

const RemoveButton = ({item, setData}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.button}
            >
                <FontAwesome name="trash" size={18} color="white" />
            </TouchableOpacity>
            <ValidateModal modalVisible={modalVisible} setModalVisible={setModalVisible} item={item} setData={setData} />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        backgroundColor: 'crimson',
        width: 35,
        height: 35,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2
    }
})

export default RemoveButton;