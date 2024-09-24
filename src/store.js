import { createStore } from 'redux';
import { combineReducers } from 'redux';
import authReducer from './reducers/authReducers'

const rootReducer = combineReducers({
    auth: authReducer,
    // other reducers can be added here
});

const store = createStore(rootReducer);

export default store;
