//https://pixabay.com/api/?key=44431626-15eb7f8aba193a574a6e55928&q
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});