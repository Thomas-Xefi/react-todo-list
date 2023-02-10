import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

const EditModal = ({ modalVisible, setModalVisible, setData, item }) => {
    const [newValue, setNewValue] = useState('')

    const editData = () => {
        setData(prevData => prevData.map((i) => {
            return (i === item) ? newValue : i;
        }));
        setNewValue('')
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
                <Text style={styles.modalText}>Édition d'un objectif</Text>
                <TextInput 
                    placeholder={"Entrez votre nouvel objectif"}
                    value={newValue} onChangeText={setNewValue}
                    style={styles.input}
                />
                <View style={{flexDirection: 'row',}}>
                    <TouchableOpacity onPress={() => { setModalVisible(false); editData(); }} style={[styles.buttonValidate, styles.button]}>
                        <Text style={styles.textStyle}>Sauvegarder</Text>
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
    paddingHorizontal: 16
  },
  buttonCancel: {
    backgroundColor: 'crimson',
    paddingHorizontal: 16
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    padding: 4,
    marginRight: 4,
    marginBottom: 16,
    borderWidth: 1,
    width: 200,
    borderRadius: 5
},
});

export default EditModal;