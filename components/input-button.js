import React, { useState } from 'react';
import { View, Button, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const InputButton = ({data, setData}) => {
    const [newValue, setNewValue] = useState('')

    const addValue = () => {
        if (!newValue) {
        return
        }
        setData([...data, newValue])
        setNewValue('')
    }

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={"Entrez votre objectif"}
                value={newValue} onChangeText={setNewValue}
                style={styles.input}
            />
            <TouchableOpacity onPress={addValue} title='Ajouter' style={styles.button}>
                <Text style={styles.textButton}>Ajouter</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 16,
    },
    input: {
        padding: 4,
        marginRight: 4,
        borderWidth: 1,
        width: 200,
        borderRadius: 5
    },
    button: {
        borderRadius: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    textButton: {
        color: 'white'
    }
})

export default InputButton;