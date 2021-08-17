import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import devToolsEnhancer from 'remote-redux-devtools';

const middleware = [thunk];

const rootReducer = combineReducers({
  authReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
