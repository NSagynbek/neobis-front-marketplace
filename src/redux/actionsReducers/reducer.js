import {
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    FETCHING_DATA,  
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    isAuthenticated: false,
    token: null,
    sentStatus:false,
    errorMessage: null,
    formData: {
      email: "",
      password: "",
      username: "",
      link: "",
    },
    user:{
      username:"",
      password:"",
    },
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

      

        
      default:
        return state;
    }
  };
  
  export default reducer;