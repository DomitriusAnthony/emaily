import axios from 'axios';
import { FETCH_USER } from './types';

// Refactored to Async/Await
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data});
}


// export const fetchUser = () => {
//     return function(dispatch) {
//         axios
//             .get('/api/current_user')
//             .then(res => dispatch({ type: FETCH_USER, payload: res}));
//     }
// };



// Redux thunk allows you to break the rule that you have to immediately return an action from an action creator