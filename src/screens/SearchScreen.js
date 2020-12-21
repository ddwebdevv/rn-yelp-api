import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
        //flex or empty tag, so we'll use only available screen space
        //<View style={{ flex: 1 }}>
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMess ? <Text>{errorMess}</Text> : null }
            <ScrollView>
                <ResultList
                    title='($) Cost Effective'
                    results={filterResultsByPrice('$')}
                />
                <ResultList
                    title='($$) Bit Pricier'
                    results={filterResultsByPrice('$$')}
                />
                <ResultList
                    title='($$$) Big Spender'
                    results={filterResultsByPrice('$$$')}
                />
                <ResultList
                    title='($$$$) High End'
                    results={filterResultsByPrice('$$$$')}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;