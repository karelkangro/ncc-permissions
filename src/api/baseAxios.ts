import axios from 'axios';
import { addInterceptors } from './interceptors';
// import { Api, HttpClient } from './generatedApi';

const { VITE_API_URL } = import.meta.env;

export const client = axios.create({
  baseURL: VITE_API_URL,
});
addInterceptors(client);
