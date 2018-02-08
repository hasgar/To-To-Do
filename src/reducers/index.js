import { combineReducers } from 'redux';
import LoginReducer from '../components/Login/reducer';
import SignupReducer from '../components/Signup/reducer';
import ListReducer from '../components/Lists/reducers';

export default combineReducers({
  login: LoginReducer,
  signup: SignupReducer,
  list: ListReducer
});