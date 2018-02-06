import {
    LIST_ADD_FORM_UPDATE,
    LIST_ADD,
    LIST_ADD_SUCCESS,
    LIST_FETCH,
    LIST_FETCH_SUCCESS
  } from '../../actions/types';
  
  const INITIAL_STATE = {
    name: '',
    error: '',
    loading: false,
    fetchError: '',
    fecthLoading: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LIST_ADD_FORM_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
      case LIST_ADD:
          return { ...state, loading: true, error: '' };
      case LIST_ADD_SUCCESS:
                  return { ...state, loading: false, name: '', error: '' };
      case LIST_FETCH:
        return { ...state, fecthLoading: true, fetchError: '' };
      case LIST_FETCH_SUCCESS:
          return { ...state, lists: action.payload, fecthLoading: false,  fetchError: '' };
      default:
        return state;
    }
  };
  