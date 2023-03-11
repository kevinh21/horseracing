// forgotPasswordReducer.js

const initialState = {
    success: false,
    error: null,
  };
  
  const forgotPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FORGOT_PASSWORD_SUCCESS':
        return {
          ...state,
          success: true,
          error: null,
        };
      case 'FORGOT_PASSWORD_FAILURE':
        return {
          ...state,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default forgotPasswordReducer;
  