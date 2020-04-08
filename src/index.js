import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.common['Content-Type'] = 'application/json'

const myInterceptorsReq = axios.interceptors.request.use(req => {
    console.log(req);
    // Edit request config
    return req;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

const myInterceptorsRes = axios.interceptors.response.use(res => {
    console.log(res);
    // Edit request config
    return res;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.eject(myInterceptorsRes);
axios.interceptors.request.eject(myInterceptorsReq);

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
