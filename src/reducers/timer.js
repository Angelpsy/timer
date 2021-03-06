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
                id: action.id,
                order: action.payload.order,
                title: action.payload.title,
                description: action.payload.description,
                childTimers: null,
                value: action.payload.value,
                left: action.payload.value,
                state: 'stop',
                parent: action.payload.parent,
                isTopLevel: !action.payload.parent,
            };
        case ACTIONS.EDIT_TIMER:
            return {
                ...state,
                ...action.payload.timer,
                left: action.payload.timer.value,
                state: 'stop',
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
