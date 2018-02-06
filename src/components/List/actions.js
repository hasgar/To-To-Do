import firebase from 'firebase';
import axios from 'axios'
import {
    LIST_ADD_FORM_UPDATE,
    LIST_ADD,
    LIST_ADD_SUCCESS,
    LIST_FETCH,
    LIST_FETCH_SUCCESS
} from '../../actions/types';


export const formUpdate = ({prop, value}) => {
    return {
      type: LIST_ADD_FORM_UPDATE,
      payload: {prop,value}
    };
};

export const createList = ({name}) => {
    return (dispatch) => {
        dispatch({ type: LIST_ADD });
        const { currentUser } = firebase.auth()
        const ref = firebase.database().ref(`/lists`).push()
        const key = ref.key
        ref.set({name: name, users: {[currentUser.uid]: true}})
        .then(() => {
            firebase.database().ref(`/users/${currentUser.uid}/lists`)
            .set({ [key]: true })
            .then(() => {
                dispatch({
                    type: LIST_ADD_SUCCESS
                })
            })
        })
    }
    
};

export const listFetch = () => {
    
    return (dispatch) => {
        dispatch({ type: LIST_FETCH });
        axios.get('https://api.myjson.com/bins/15x0g1')
        .then(function (response) {
            dispatch({
                type: LIST_FETCH_SUCCESS,
                payload: response.data.lists
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    };
  };

    