import {
  LOGIN_SUCCESS, 
  REFRESH_TOKEN, 
  TOGGLE_SMS,
  RERENDER_REQUIRED,
  SIGNUP_SUCCESS,
  USERNAME_PASSWORD,
  DELETE_RERENDER,
  RERENDER_REMOVE_LIKED_PRODUCTS
} from "./actionTypes"



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



  export const toggleIsDelete = ()=>{
    return {
      type:DELETE_RERENDER,
    }
  }  

  export const toggleRerender = ()=>{
    return {
      type:RERENDER_REQUIRED,
    }
  }

  export const toggleRemoveLikedProducts = ()=>{
    return {
      type:RERENDER_REMOVE_LIKED_PRODUCTS,
    }
  }









  