import {
    TASK_FETCH,
    TASK_FETCH_SUCCESS
  } from '../../actions/types';
  
  const INITIAL_STATE = {
    error: '',
    loading: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case TASK_FETCH:
        return { ...state, loading: true, error: '' };
      case TASK_FETCH_SUCCESS:
          return { ...state, tasks: action.payload, loading: false,  error: '' };
      default:
        return state;
    }
  };
  