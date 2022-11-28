import axios from "axios";

// Define axios
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// Intercept and inject jwt
instance.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    return config;
});

export default instance;