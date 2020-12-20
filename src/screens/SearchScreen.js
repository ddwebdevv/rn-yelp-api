import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMess] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(item => {
            return item.price === price;
        });
    }

    return(
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMess ? <Text>{errorMess}</Text> : null }
            <Text>we have found {results.length} results</Text>
            <ResultList
                title='Cost Effective'
                results={filterResultsByPrice('$')}
            />
            <ResultList
                title='Bit Pricier'
                results={filterResultsByPrice('$$')}
            />
            <ResultList
                title='Big Spender'
                results={filterResultsByPrice('$$$')}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;