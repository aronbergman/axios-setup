import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.headers.common['Authorization'] = 'AUTH TOKEN';

export default instance;