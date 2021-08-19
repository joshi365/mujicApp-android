import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer'

const middleware = [thunk];

const rootReducer = combineReducers({
  authReducer,
  userReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
