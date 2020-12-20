import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {

    return(
        <View style={styles.backgroundStyle}>
            <MaterialIcons name="search"  style={styles.iconStyle}/>
            <TextInput
                placeholder='Search'
                style={styles.inputStyle}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={onTermSubmit}
            />            
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#eae6e6',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        fontSize: 22,
        flex: 1
    },
    iconStyle: {
        fontSize: 45,
        color: "black",
        alignSelf: 'center',
        marginHorizontal: 5
    }
});

export default SearchBar;