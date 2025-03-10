import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', 
  timeout: 20000, 
  headers: {
    'Content-Type': 'application/json',
  
  },
});

// Interceptor cho request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor cho response
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (error.response) {
    //   if (error.response.status === 4) {
    //     localStorage.removeItem('token');
    //     window.location.href = '/login'; 
    //   }
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;
