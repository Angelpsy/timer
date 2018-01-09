import { combineReducers } from 'redux'
import selectedTimer from './selectedTimer';
import timers from './timers';
import styles from './styles';

const appReducers = combineReducers({
    selectedTimer,
    timers,
    styles,
});

export default appReducers;
