import {
    SIGNUP_FORM_UPDATE,
    SIGNUP_USER_FAIL,
    SIGNUP_USER
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
      case SIGNUP_FORM_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
      case SIGNUP_USER:
        return { ...state, loading: true, error: '' };
      case SIGNUP_USER_FAIL:
        return { ...state, error: 'Signup Failed.', loading: false };
      default:
        return state;
    }
  };
  