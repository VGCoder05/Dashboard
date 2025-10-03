import axios from 'axios';

// 1. Create the Axios instance with a base configuration
const api = axios.create({
  baseURL: import.meta.env.API_BASE_URL || 'http://localhost:5000',
  withCredentials: true,
});



export default api;