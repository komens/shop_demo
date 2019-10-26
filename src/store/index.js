import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

import cartStore from './cartStore';

const reducers = combineReducers({
    cart: cartStore
});

const store = createStore(
	reducers,
	applyMiddleware(thunk)
)

export default store;