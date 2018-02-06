import firebase from 'firebase';
import {
  SIGNUP_FORM_UPDATE,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER
} from '../../actions/types';

export const loginFormUpdate = ({prop, value}) => {
  return {
    type: SIGNUP_FORM_UPDATE,
    payload: {prop,value}
  };
};


export const signupUser = ({ email, password, navigation }) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => signupUserSuccess(dispatch, user, email,  navigation))
      .catch((error) => signupUserFail(dispatch));
  };
};


const signupUserFail = (dispatch) => {
  dispatch({ type: SIGNUP_USER_FAIL });
};

const signupUserSuccess = (dispatch, user, email, navigation) => {

  const { currentUser } = firebase.auth()

  firebase.database().ref(`/users/${currentUser.uid}`)
      .set({ email: email })
      .then(() => {
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: user
        });
        navigation.navigate('Home')
  });

};
