  import axios from 'axios';
  import { getAccessToken, setAccessToken, getRefreshToken, setRefreshToken,getUserName } from './tokenService';
import { tokenRefresh } from './index';

  const instance = axios.create({
    baseURL: 'https://mobi-market-production.up.railway.app/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    async (config) => {
      const excludedEndpoints = ["api/v1/auth/login", "api/v1/users/refreshToken"];
      if(!excludedEndpoints.some(endpoint=>config.url.endsWith(endpoint))){
        const token = getAccessToken();   
        console.log("i am from request Token",token)
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
        return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  

  let retryCounter = 0;

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry && retryCounter < 3) {
      originalRequest._retry = true;
      retryCounter++;

      const token = getRefreshToken();
      console.log("i am from response RefreshToken",token)
      const username = getUserName();
      console.log("i am from response refresh Username",username)
      const formData = {
        token:token,
        username:username
      }

      try {
        const res = await tokenRefresh(formData)
        setAccessToken(res.accessToken);
        setRefreshToken(res.refreshToken);
        console.log("NewAccessToken",res.accessToken)
        console.log("NewRefreshToken",res.refreshToken)
        originalRequest.headers.Authorization = `Bearer ${res.accessToken}`;
        retryCounter = 0; // Reset the retry counter on successful token refresh
        return instance(originalRequest);
      } catch (refreshError) {
        // Handle error during token refresh
        console.error('Error refreshing token:', refreshError);
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
