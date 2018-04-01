// Using camelcase on the filename indicates exporting a function 
import { FETCH_USER } from '../actions/types';

export default function (state = null, action) {    switch (action.type) {
        case FETCH_USER:
            //  This returns the user model
            return action.payload || false;

        default:
            return state;
    }
};