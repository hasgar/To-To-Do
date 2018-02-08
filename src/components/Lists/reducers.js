import {
    LIST_ADD_FORM_UPDATE,
    LIST_ADD,
    LIST_ADD_SUCCESS,
    LIST_FETCH,
    LIST_FETCH_SUCCESS,
    TASK_FETCH,
    TASK_FETCH_SUCCESS,
    TASK_UPDATE,
    TASK_UPDATE_FAIL
  } from '../../actions/types';
  
  const INITIAL_STATE = {
    name: '',
    error: '',
    lists: '',
    loading: false,
    fetchError: '',
    fecthLoading: false 
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LIST_ADD_FORM_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
      case LIST_ADD:
        return { ...state, lists: state.lists.concat(action.payload), loading: true, error: ''}
      case LIST_ADD_SUCCESS:
        return { ...state, loading: false, name: '', error: '' };
      case LIST_FETCH:
        return { ...state, fecthLoading: true, fetchError: '' };
      case LIST_FETCH_SUCCESS:
        return { ...state, lists: action.payload, fecthLoading: false,  fetchError: '' };
      case TASK_FETCH:
        return { ...state, loading: true, error: '' };
      case TASK_FETCH_SUCCESS:
        return { ...state, loading: false,  error: '' };
      case TASK_UPDATE:
        return { ...state, lists: action.payload, loading: false,  error: '' };
      case TASK_UPDATE_FAIL:
        return { ...state, lists: action.payload, loading: false,  error: '' };
      default:
        return state;
    }
  };
  