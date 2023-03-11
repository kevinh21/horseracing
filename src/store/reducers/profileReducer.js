// profileReducer.js

const initialState = {
    profile: null,
    error: null,
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PROFILE_SUCCESS':
      case 'UPDATE_PROFILE_SUCCESS':
        return {
          ...state,
          profile: action.payload,
          error: null,
        };
      case 'GET_PROFILE_FAILURE':
      case 'UPDATE_PROFILE_FAILURE':
        return {
          ...state,
          profile: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default profileReducer;
  