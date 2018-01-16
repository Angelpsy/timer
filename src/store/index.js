import { createStore } from 'redux';
import appReducers from '../reducers'
import {timers} from './TestData';

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// TODO: разобраться с https://github.com/zalmoxisus/redux-devtools-extension#usage

export default store;
