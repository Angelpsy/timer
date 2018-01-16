import {ACTIONS} from '../constants/actions';
import nanoid from 'nanoid';

import {timers as _timers} from '../store/TestData';

// TODO: разобраться с группами таймеров
/**
 * @param {Object} timer
 * @return {{left, state: string}}
 */
function playTimer(timer) {
    return {
        ...timer,
        state: 'play',
    }
}

// TODO: разобраться с группами таймеров
/**
 * @param {Object} timer
 * @return {{left, state: string}}
 */
function stopTimer(timer) {
    return {
        ...timer,
        left: timer.value,
        state: 'stop',
    }
}

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
                    return playTimer(timer);
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
                    return stopTimer(timer);
                } else {
                    return timer;
                }
            });
        case ACTIONS.TICK:
            let newState = state.slice();

            action.payload.ids.forEach((id) => {
                let isNeedPlayNextTimer = false;
                newState = newState.map((timer) => {
                    if (timer.id === id && timer.left > 1) {
                        return {
                            ...timer,
                            left: timer.left - 1,
                        }
                    }

                    if (timer.id === id && timer.left <= 1) {
                        isNeedPlayNextTimer = true;
                        return stopTimer(timer);
                    }

                    if (isNeedPlayNextTimer) {
                        isNeedPlayNextTimer = false;
                        return {
                            ...timer,
                            state: 'play',
                        }
                    }

                    return timer;
                });
            });

            return newState;
        default:
            return state
    }
};

export default timers
