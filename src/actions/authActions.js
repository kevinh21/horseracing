import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (token, user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token,
      user,
    },
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password,
      });

      const { token, user } = response.data;

      dispatch(loginSuccess(token, user));
    } catch (error) {
      dispatch(loginFailure(error.response.data));
    }
  };
};
