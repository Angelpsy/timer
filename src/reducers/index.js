import { combineReducers } from 'redux'
import selectedTimer from './selectedTimer';
import timers from './timers';

const appReducers = combineReducers({
    selectedTimer,
    timers,
});

export default appReducers;
