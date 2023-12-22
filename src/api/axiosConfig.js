import axios from 'axios';
import { getAccessToken, setAccessToken, getRefreshToken, setRefreshToken,getUserName } from './tokenService';

const instance = axios.create({
  baseURL: 'https://mobi-market-production.up.railway.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const token = getRefreshToken();
      const username = getUserName();
      
       const res = await instance.post('api/v1/users/refreshToken', { token, username });
      // Assuming res contains new tokens:
      setAccessToken(res.accessToken);
      setRefreshToken(res.refreshToken);
      originalRequest.headers.Authorization = `Bearer ${res.accessToken}`;
       return instance(originalRequest);

    
      setAccessToken('newAccessToken');
      originalRequest.headers.Authorization = `Bearer newAccessToken`;
      return instance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default instance;

