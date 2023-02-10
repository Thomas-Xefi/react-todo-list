import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import EditModal from './edit-modal';

const EditButton = ({item, setData}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.button}
            >
                <FontAwesome name="edit" size={18} color="white" />
            </TouchableOpacity>
            <EditModal modalVisible={modalVisible} setModalVisible={setModalVisible} item={item} setData={setData} />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        backgroundColor: 'blue',
        width: 35,
        height: 35,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2
    }
})

export default EditButton;