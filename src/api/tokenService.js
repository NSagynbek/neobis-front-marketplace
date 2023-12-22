let accessToken = localStorage.getItem('accessToken');
let refreshToken = localStorage.getItem('refreshToken');
let username = localStorage.getItem('username');


export const getAccessToken = () => accessToken;

export const setAccessToken = (token) => {
  accessToken = token;
  localStorage.setItem('accessToken', token);
};

export const getRefreshToken = () => refreshToken;

export const setRefreshToken = (token) => {
  refreshToken = token;
  localStorage.setItem('refreshToken', token);
};


export const getUserName = () => username;