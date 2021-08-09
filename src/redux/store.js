import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from './reducers/reducers/authReducer'


const middleware = [thunk];

const rootReducer = combineReducers({ 
  authReducer,
 });

 export const store = createStore(rootReducer, applyMiddleware(thunk));