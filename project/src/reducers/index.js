import { combineReducers } from 'redux';
import ProductsReducer from './products_reducer';
import CartReducer from './cart_reducer';

const rootReducer = combineReducers({
    products : ProductsReducer
    ,cart : CartReducer
});

export default rootReducer;