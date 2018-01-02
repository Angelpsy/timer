import { combineReducers } from 'redux'
import selectedTimer from './selectedTimer';

const appReducers = combineReducers({
    selectedTimer,
});

export default appReducers;
