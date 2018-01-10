import {ACTIONS} from '../constants/actions';
import nanoid from 'nanoid';

import {timers as _timers} from '../Container/TimersContainer/TestData';

const timers = (state = _timers, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TIMER:
            return [
                ...state,
                {
                    id: nanoid(),
                    order: 0,
                    title: action.payload.title,
                    description: action.payload.description,
                    childTimers: null,
                    value: action.payload.value,
                    left: action.payload.value,
                    state: 'stop',
                }
            ];
        case ACTIONS.PLAY_TIMER:
            return state.map((timer) => {
                if (action.payload.id === timer.id && timer.state !== 'play') {
                    return {
                        ...timer,
                        state: 'play',
                    }
                } else {
                    return timer;
                }
            });
        case ACTIONS.PAUSE_TIMER:
            return state.map((timer) => {
                if (action.payload.id === timer.id && timer.state !== 'pause') {
                    return {
                        ...timer,
                        state: 'pause',
                    }
                } else {
                    return timer;
                }
            });
        case ACTIONS.STOP_TIMER:
            return state.map((timer) => {
                if (action.payload.id === timer.id && timer.state !== 'stop') {
                    return {
                        ...timer,
                        left: timer.value,
                        state: 'stop',
                    }
                } else {
                    return timer;
                }
            });
        case ACTIONS.TICK_TIMER:
            return state.map((timer) => {
                if (action.payload.id === timer.id && timer.state === 'play') {
                    return {
                        ...timer,
                        left: timer.left - 1,
                    }
                } else {
                    return timer;
                }
            });
        default:
            return state
    }
};

export default timers
