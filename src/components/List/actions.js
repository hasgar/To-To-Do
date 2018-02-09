import axios from 'axios'
import {
    TASK_FETCH,
    TASK_FETCH_SUCCESS,
    TASK_UPDATE,
    TASK_UPDATE_FAIL,
    TASK_ADD,
    TASK_ADD_FAIL
} from '../../actions/types';


export const taskUpdate = (lists, selectedListId, selectedTaskId) => {

    return (dispatch) => {
        lists[selectedListId].items[selectedTaskId].isFinished = !lists[selectedListId].items[selectedTaskId].isFinished
        dispatch({ type: TASK_UPDATE,
            payload:  lists});
        axios.get('https://api.myjson.com/bins/16zt1t')
        .then(function (response) {
           
        })
        .catch(function (error) {
            lists[selectedListId].items[selectedTaskId].isFinished = !lists[selectedListId].items[selectedTaskId].isFinished
            dispatch({
                type: TASK_UPDATE_FAIL,
                payload: lists
            })
        });
    };
};

export const taskCreate = (name, listId) => {
    return (dispatch) => {
        dispatch({ type: TASK_ADD, payload: {listId: listId, task: {id: 12, name: name, isFinished: false}} });
        axios.get('https://api.myjson.com/bins/18acz5')
        .then(function (response) {
            
        })
        .catch(function (error) {
            // dispatch({
            //     type: TASK_ADD_FAIL,
            //     payload: {listId: listId, task: {id: 12, name: name, isFinished: false}}
            // })
        });
    };
    
};

    