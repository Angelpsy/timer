import {ACTIONS} from '../constants/actions';
import {getAllTimers} from '../reducers';

import {timers as testData} from '../store/TestData';

const requestTimers = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    // TODO: после реализации добавления\удаления таймеров - реализовать загрузку из localStorage
    return testData;
};

export const getTimers = () => {
    return async dispatch => {
        const timers = await requestTimers();
        dispatch({
            type: ACTIONS.GET_TIMERS,
            payload: {
                timers,
            }
        });
    }
};

/**
 * Run after added, deleted timers and changed order of one timer
 * @param {{byId: Object, allIds: Array}} timers (normalized timers)
 * @return {{type: string, payload: {timers: {byId: Object, allIds: Array}}}}
 */
export const resortTimers = (timers) => {
    return {
        type: ACTIONS.GET_TIMERS,
        payload: {
            timers: timers,
        }
    }
};

/**
 * @param {String|Number} id
 * @return {{type: string, payload: {id: String|Number}}}
 */
export const selectedTimer = id => {
    return {
        type: ACTIONS.SELECTED_TIMER,
        payload: {
            id,
        },
    }
};

/**
 * @param {{title: String, description: String, value: Number}} timer
 * @return {{type: string, payload: {title, description, value}}}
 */
export const addTimer = timer => {
    return {
        type: ACTIONS.ADD_TIMER,
        payload: {
            title: timer.title,
            description: timer.description,
            value: timer.value,
        },
    }
};

/**
 * @param {String|Number} id
 * @return {{type: string, payload: {id: String|Number}}}
 */
export const playTimer = id => {
    return (dispatch, getState) => {
        if (getAllTimers(getState()).findIndex(timer => timer.state === 'play') !== -1) {
            return;
        }

        // TODO: временный запрет за запуск групп таймеров
        if (getState().timers.byId[id].childTimers) {
            return;
        }

        dispatch(tick(id));
        dispatch({
            type: ACTIONS.PLAY_TIMER,
            payload: {
                id,
            },
        });
    }
};
/**
 * @param {String|Number} id
 * @return {{type: string, payload: {id: String|Number}}}
 */
export const pauseTimer = id => {
    return {
        type: ACTIONS.PAUSE_TIMER,
        payload: {
            id,
        },
    }
};

/**
 * @param {String|Number} id
 * @return {{type: string, payload: {id: String|Number}}}
 */
export const stopTimer = id => {
    return {
        type: ACTIONS.STOP_TIMER,
        payload: {
            id,
        },
    }
};

/**
 * @param {String|Number} id
 * @return {{type: string, payload: {id: String|Number}}}
 */
const _tick = id => {
    return {
        type: ACTIONS.TICK,
        payload: {
            id,
        }
    }
};

/**
 * @param {String|Number} id
 * @return {function(*, *)}
 */
export const tick = id => {
    return async (dispatch, getState) => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // pause 1000ms

        const timer = getState().timers.byId[id];

        if (!timer || timer.state !== 'play') {
            return;
        }

        dispatch(_tick(timer.id));

        if (timer.left > 1) {
            dispatch(tick(timer.id));
        } else {
            dispatch(stopTimer(timer.id));

            if (timer.next) {
                dispatch(playTimer(timer.next))
            }
        }

    };
};
