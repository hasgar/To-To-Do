import axios from 'axios'
import {
    TASK_FETCH,
    TASK_FETCH_SUCCESS,
    TASK_UPDATE,
    TASK_UPDATE_FAIL
} from '../../actions/types';


// export const formUpdate = ({prop, value}) => {
//     return {
//       type: LIST_ADD_FORM_UPDATE,
//       payload: {prop,value}
//     };
// };

// export const createList = ({name}) => {
//     return (dispatch) => {
//         dispatch({ type: LIST_ADD });
//         const { currentUser } = firebase.auth()
//         const ref = firebase.database().ref(`/lists`).push()
//         const key = ref.key
//         ref.set({name: name, users: {[currentUser.uid]: true}})
//         .then(() => {
//             firebase.database().ref(`/users/${currentUser.uid}/lists`)
//             .set({ [key]: true })
//             .then(() => {
//                 dispatch({
//                     type: LIST_ADD_SUCCESS
//                 })
//             })
//         })
//     }
    
// };

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

    