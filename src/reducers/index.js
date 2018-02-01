import { combineReducers } from 'redux';
import LoginReducer from '../components/Login/reducer';
import SignupReducer from '../components/Signup/reducer';

export default combineReducers({
  login: LoginReducer,
  signup: SignupReducer
});

