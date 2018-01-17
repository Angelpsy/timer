import {ACTIONS} from '../constants/actions';
import nanoid from 'nanoid';

// TODO: разобраться с группами таймеров
const timer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.GET_TIMERS:
            return state.state === 'play' ?
                {
                    ...state,
                    state: 'pause',
                }
                : state;
        case ACTIONS.ADD_TIMER:
            return {
                id: nanoid(),
                order: 0,
                title: action.payload.title,
                description: action.payload.description,
                childTimers: null,
                value: action.payload.value,
                left: action.payload.value,
                state: 'stop',
            };
        case ACTIONS.PLAY_TIMER:
            if (action.payload.id === state.id && state.state !== 'play') {
                return {
                    ...state,
                    state: 'play',
                };
            } else {
                return state;
            }
        case ACTIONS.PAUSE_TIMER:
            if (action.payload.id === state.id && state.state !== 'pause') {
                return {
                    ...state,
                    state: 'pause',
                };
            } else {
                return state;
            }

        case ACTIONS.STOP_TIMER:
            if (action.payload.id === state.id && state.state !== 'stop') {
                return {
                    ...state,
                    left: state.value,
                    state: 'stop',
                };
            } else {
                return state;
            }
        case ACTIONS.TICK:
            if (state.id === action.payload.id) {
                return {
                    ...state,
                    left: state.left - 1,
                }
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default timer;
