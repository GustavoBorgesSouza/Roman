import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.3.158',
})

export default api;