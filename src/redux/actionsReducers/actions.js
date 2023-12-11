import { LOGIN_SUCCESS} from "./actionTypes"
import { SIGNUP_SUCCESS}from "./actionTypes"


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










  