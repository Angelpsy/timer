import {ACTIONS} from '../constants/actions';
import nanoid from 'nanoid';

// TODO: разобраться с группами таймеров
/**
 * @param {Object} state
 * @param {{type: String}} action
 * @return {state}
 */
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
        // eslint-disable-next-line no-case-declarations
        case ACTIONS.EDIT_TIMER:
            const tmp = {};
            if (state.left > action.payload.timer.value) {
                tmp.left = action.payload.timer.value;
                tmp.state = 'stop';
            }
            return {
                ...state,
                ...tmp,
                ...action.payload.timer,
            };
        case ACTIONS.PLAY_TIMER:
            if (state.state !== 'play') {
                return {
                    ...state,
                    state: 'play',
                };
            } else {
                return state;
            }
        case ACTIONS.PAUSE_TIMER:
            if (state.state !== 'pause') {
                return {
                    ...state,
                    state: 'pause',
                };
            } else {
                return state;
            }

        case ACTIONS.STOP_TIMER:
            if (state.state !== 'stop') {
                return {
                    ...state,
                    left: state.value,
                    state: 'stop',
                };
            } else {
                return state;
            }
        case ACTIONS.TICK:
            return {
                ...state,
                left: state.left - 1,
            };
        default:
            return state;
    }
};

export default timer;
