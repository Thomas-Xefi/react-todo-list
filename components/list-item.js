import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EditButton from './edit-button';
import RemoveButton from './remove-button';

const ListItem = ({textItem, setData, data}) => {
    return (
        <View
            style={styles.container}
        >
            <Text style={styles.titleItem}>{textItem}</Text>
            <View
                style={styles.actions}
            >
                <RemoveButton item={textItem} setData={setData} />
                <EditButton item={textItem} setData={setData} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 4,
    },
    titleItem: {
        maxWidth: 200,
    },
    actions: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default ListItem;