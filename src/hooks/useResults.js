import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

//extracting all yelp search api to one hook
export default () => {
    const [results, setResults] = useState([]);
    const [errorMess, setErrorMess] = useState('');
    

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            // all data we need in response.data.businesses
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMess('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('grill');
    }, []);

    //return what we use in different component
    return [searchApi, results, errorMess];
};