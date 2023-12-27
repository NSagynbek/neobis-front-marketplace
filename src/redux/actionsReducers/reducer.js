import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  FETCHING_DATA,  
  TOGGLE_SMS,
  USERNAME_PASSWORD,
  REFRESH_TOKEN,
  LIKE,
} from "./actionTypes";

const initialState = {
  loading: false,
  isAuthenticated: false,
  smsCode:false,
  usernamePassword:{
    username:"",
    email:"",
  },
  username:"",
  isLiked:false,
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

      case USERNAME_PASSWORD:
        return {
          ...state,
          usernamePassword:{
            ...state.usernamePassword,
            ...action.payload
          },
        } 
      
      case REFRESH_TOKEN:
        return {
          ...state,
          username:action.payload
        }  

      case LIKE:
        return {
          ...state,
          isLiked:!state.isLiked
        }

      
    default:
      return state;
  }
};

export default reducer;