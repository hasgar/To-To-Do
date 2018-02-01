import {
    LOGIN_FORM_UPDATE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
  } from '../../actions/types';
  
  const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOGIN_FORM_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
      case LOGIN_USER:
        return { ...state, loading: true, error: '' };
      case LOGIN_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload };
      case LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication Failed.', loading: false };
      default:
        return state;
    }
  };
  