import _ from 'lodash';
import { ADD_TO_CART, DELETE_FROM_CART } from '../actions/index';

export default function(state = {}, action) {
    switch(action.type) {
        case ADD_TO_CART : {
            // create a copy of the state object and add addition items to cart
            return { ...state, [action.payload.id] : action.payload } ;
        }

        case DELETE_FROM_CART : {
            return _.omit(state, action.payload.id);
        }
    }

    return state;
}