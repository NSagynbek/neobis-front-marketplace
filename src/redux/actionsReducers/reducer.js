import {
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    FETCHING_DATA,  
    TOGGLE_MODAL
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    isAuthenticated: false,
    modalWindowPhone:false,
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

        case TOGGLE_MODAL:
          return {
            ...state,
            modalWindowPhone:!state.modalWindowPhone
          }

      

        
      default:
        return state;
    }
  };
  
  export default reducer;