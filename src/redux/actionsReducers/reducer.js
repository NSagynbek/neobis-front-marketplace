import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  FETCHING_DATA,  
  TOGGLE_SMS,
  USERNAME_PASSWORD,
  REFRESH_TOKEN,
  DELETE_RERENDER,
  RERENDER_REQUIRED,
  RERENDER_REMOVE_LIKED_PRODUCTS,
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
  isDelete:false,
  rerender:false,
  removeLikedProducts:false,
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


      case DELETE_RERENDER:
        return {
          ...state,
          isDelete:!state.isDelete
        }

      case RERENDER_REQUIRED:
        return {
          ...state,
          rerender:!state.rerender
        }

        case RERENDER_REMOVE_LIKED_PRODUCTS:
          return {
            ...state,
            removeLikedProducts:!state.removeLikedProducts
          }

      
    default:
      return state;
  }
};

export default reducer;