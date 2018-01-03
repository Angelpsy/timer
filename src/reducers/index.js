import { combineReducers } from 'redux'
import idSelectedTimer from './selectedTimer';
import timers from './timers';

const appReducers = combineReducers({
    idSelectedTimer,
    timers,
});

export default appReducers;
