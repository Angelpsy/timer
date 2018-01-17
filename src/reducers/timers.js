import {ACTIONS} from '../constants/actions';
import timer from './timer';

const timers = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.GET_TIMERS:
            return action.payload.timers.map(item => timer(item, action));
        case ACTIONS.ADD_TIMER:
            return [ ...state, timer(null, action) ];
        case ACTIONS.PLAY_TIMER:
            return state.map((item) => timer(item, action));
        case ACTIONS.PAUSE_TIMER:
            return state.map((item) => timer(item, action));
        case ACTIONS.STOP_TIMER:
            return state.map((item) => timer(item, action));
        case ACTIONS.TICK:
            return state.map((item) => timer(item, action));
        default:
            return state
    }
};

export default timers
