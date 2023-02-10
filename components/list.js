import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from './list-item';

const List = ({data, setData}) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <ListItem textItem={item} setData={setData} />}
            style={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        maxHeight: 400,
        width: 300
    }
})

export default List;