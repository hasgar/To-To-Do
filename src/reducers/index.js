import { combineReducers } from 'redux';
import LoginReducer from '../components/Login/reducer';
import SignupReducer from '../components/Signup/reducer';
import ListReducer from '../components/List/reducers';

export default combineReducers({
  login: LoginReducer,
  signup: SignupReducer,
  list: ListReducer
});

