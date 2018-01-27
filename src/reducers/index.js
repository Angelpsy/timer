import {combineReducers} from 'redux';
import app from './app';
import selectedTimer from './selectedTimer';
import timers, * as fromTimers from './timers';
import audio from './audio';
import editForm from './editForm';

const appReducers = combineReducers({
    app,
    selectedTimer,
    timers,
    audio,
    editForm,
});

export default appReducers;

/**
 * @param {{timers: Object}} state
 * @return {timer[]}
 */
export const getAllTimers = state => {
    return fromTimers.getAllTimers(state.timers);
};
