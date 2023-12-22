import { LOGIN_SUCCESS, REFRESH_TOKEN, TOGGLE_SMS} from "./actionTypes"
import { SIGNUP_SUCCESS}from "./actionTypes"
import {USERNAME_PASSWORD} from "./actionTypes"



export const loginSuccess = (jwt) => {
    return{
        type: LOGIN_SUCCESS,
        payload: jwt,
    }
  };
  
  export const signupSuccess = (message) => {
   return{
    type: SIGNUP_SUCCESS,
    payload:message
   }
  };

  export const toggleSms =()=>{
    return {
        type:TOGGLE_SMS
    }
  }

  export const basket = (data) => {
    return{
     type:USERNAME_PASSWORD,
     payload:data,
    }
   };

   export const tokenRefresh = (data)  =>{
    return {
      type: REFRESH_TOKEN,
      payload: data,
    }
  }
  










  