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

export const listCreate = (name) => {
    return (dispatch) => {
        dispatch({ type: LIST_ADD, payload: {id: 9, name: name, items: []} });
        axios.get('https://api.myjson.com/bins/18acz5')
        .then(function (response) {
            
        })
        .catch(function (error) {
            dispatch({
                type: LIST_ADD_FAIL
            })
        });
    };
    
};

export const listFetch = () => {
    
    return (dispatch) => {
        dispatch({ type: LIST_FETCH });
        axios.get('https://api.myjson.com/bins/18acz5')
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

    