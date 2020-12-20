import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer dXvZlD8uPmXWzYUafiEElZnoba3MTBdm7Ym3kR_JoDvRiov26npgTEqtEWudGQf4Htd5TxWVgbGWe-4oYoG51Rq6JsP9aq2-GKMy3AZU_yVvHbIm0t5UtIR_bpXeX3Yx'
    }
});