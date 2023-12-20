import {
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    FETCHING_DATA,  
    TOGGLE_SMS
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    isAuthenticated: false,
    smsCode:false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_DATA:
        return {
          ...state,
          loading: true,
        };
      case LOGIN_SUCCESS:
        return {
          ...state, 
          isAuthenticated: true,
          
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          loading: false,
          formData: {
            ...state.formData, 
            ...action.payload, 
          },
        }

        case TOGGLE_SMS:
          return {
            ...state,
            smsCode:!state.smsCode
          }

      

        
      default:
        return state;
    }
  };
  
  export default reducer;