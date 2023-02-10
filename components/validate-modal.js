import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ValidateModal = ({ modalVisible, setModalVisible, item, setData }) => {
    const removeData = (item) => {
        setData(prevData => prevData.filter(i => i !== item));
    };
    return (
        <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false) }
            >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Suppression d'un objectif</Text>
                <View style={{flexDirection: 'row',}}>
                    <TouchableOpacity onPress={() => { setModalVisible(false); removeData(item); }} style={[styles.buttonValidate, styles.button]}>
                        <Text style={styles.textStyle}>Confirmer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={[styles.buttonCancel, styles.button]}>
                        <Text style={styles.textStyle}>Annuler</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 8
  },
  buttonValidate: {
    backgroundColor: 'blue',
  },
  buttonCancel: {
    backgroundColor: 'crimson',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ValidateModal;