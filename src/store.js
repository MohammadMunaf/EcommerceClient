import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { cartReducer } from './reducers/cartReducers';
import {thunk} from 'redux-thunk';
const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : []
    }
};
const reducer = combineReducers({
    cart: cartReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;