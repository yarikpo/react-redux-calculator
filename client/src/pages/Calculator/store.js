import { applyMiddleware, createStore } from "redux";
import historyReducer from './reducers/history';
import thunkMiddleware from "redux-thunk";

export default createStore(
    historyReducer,
    applyMiddleware(thunkMiddleware)
);