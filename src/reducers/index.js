import { combineReducers } from 'redux'
import idSelectedTimer from './selectedTimer';

const appReducers = combineReducers({
    idSelectedTimer,
});

export default appReducers;
