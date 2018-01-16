import { combineReducers } from 'redux'
import app from './app';
import selectedTimer from './selectedTimer';
import timers from './timers';

const appReducers = combineReducers({
    app,
    selectedTimer,
    timers,
});

export default appReducers;
