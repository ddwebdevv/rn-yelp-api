import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const ResultsList = ({ title, results }) => {

    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    }
});

export default ResultsList;