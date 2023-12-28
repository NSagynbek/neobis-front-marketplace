import axios from 'axios';
  import { getAccessToken, setAccessToken, getRefreshToken, setRefreshToken,getUserName } from './tokenService';


  const muliPartinstance = axios.create({
    baseURL: 'https://mobi-market-production.up.railway.app/',
    headers: {
      'Content-Type': 'multipart/form-data', 
    },
  });





  muliPartinstance.interceptors.request.use(
     async (config) => {
       const excludedEndpoints = ["api/v1/auth/login", "api/v1/users/refreshToken"];
       if(!excludedEndpoints.some(endpoint=>config.url.endsWith(endpoint))){
         const token = getAccessToken();   
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

  muliPartinstance.interceptors.response.use(
   (response) => {
     return response;
   },
   async (error) => {
     const originalRequest = error.config;
     if (error.response.status === 403 && !originalRequest._retry && retryCounter < 3) {
       originalRequest._retry = true;
       retryCounter++;

       const token = getRefreshToken();
       const username = getUserName();

       const formData = {
         token: token,
         username: username
       };

       try {
         const response = await muliPartinstance.post("api/v1/users/refreshToken",formData);
         setAccessToken(response.data.accessToken);
         setRefreshToken(response.data.refreshToken);

         originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
         retryCounter = 0; 
         return muliPartinstance(originalRequest);
       } catch (refreshError) {
       
         console.error('Error refreshing token:', refreshError);

        
         return Promise.reject(refreshError);
       }
     }
     return Promise.reject(error);
   }
 );


export default muliPartinstance;