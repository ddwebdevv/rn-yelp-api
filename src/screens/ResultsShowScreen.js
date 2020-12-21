import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const responce = await yelp.get(`/${id}`);
        setResult(responce.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return(
        <>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) =>{
                    return <Image style={styles.image} source={{ uri: item}} />
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 220,
        borderRadius: 5,
        marginBottom: 5,
        marginLeft: 15
    },
    name: {
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 15,
        marginVertical: 10
    }
});

export default ResultsShowScreen;