import axios from 'axios';
import yelpKey from '../../authorization';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: {yelpKey}
    }
});