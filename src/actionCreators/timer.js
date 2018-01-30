import {ACTIONS} from '../constants/actions';
import {getAllTimers} from '../reducers';

import {timers as testData} from '../store/TestData';

import nanoid from 'nanoid';

/**
 * @return {Promise<void>}
 */
const requestTimers = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    // TODO: после реализации добавления\удаления таймеров - реализовать загрузку из localStorage
    return testData;
};

/**
 * @return {function(*)}
 */
export const getTimers = () => {
    return async dispatch => {
        const timers = await requestTimers();
        dispatch({
            type: ACTIONS.GET_TIMERS,
            payload: {
                timers,
            },
        });
    };
};

/**
 * Run after added, deleted timers and changed order of one timer
 * @param {{byId: Object, allIds: Array}} timers (normalized timers)
 * @return {{type: string, payload: {timers: {byId: Object, allIds: Array}}}}
 */
export const resortTimers = timers => {
    return {
        type: ACTIONS.GET_TIMERS,
        payload: {
            timers: timers,
        },
    };
};

/**
 * @param {String} id
 * @return {{type: string, payload: {id: String}}}
 */
export const selectedTimer = id => {
    return {
        type: ACTIONS.SELECTED_TIMER,
        id,
    };
};

/**
 * @param {{title: String, description: String, value: Number}} timer
 * @return {{type: string, payload: {title, description, value}}}
 */
export const addTimer = timer => (dispatch, getState) => {
    const timersAllIds = getState().timers.allIds;
    const order = timersAllIds.length;
    const idPrevTimer = order ? timersAllIds[order - 1] : null;
    dispatch({
        type: ACTIONS.ADD_TIMER,
        id: nanoid(),
        payload: {
            title: timer.title,
            description: timer.description,
            value: timer.value,
            order,
            parent: null, // TODO: изменить после добавления групп таймеров
            next: null,
            idPrevTimer,
        },
    });
};

/**
 * @param {id} id
 * @param {Object} timer
 * @return {{type: string, id: id, payload: {timer: Object}}}
 */
export const editTimer = (id, timer) => {
    return {
        type: ACTIONS.EDIT_TIMER,
        id,
        payload: {
            timer,
        },
    };
};

/**
 * @param {id} id
 * @return {{type: string, id: id, payload: {timer: Object}}}
 */
export const deleteTimer = id => (dispatch, getState) => {
    // TODO: удаление дочерних и внучатых таймеров

    const allIds = getState().timers.allIds;
    const index = allIds.indexOf(id);
    const idPrevTimer = index !== -1 ? allIds[index - 1] : null;
    dispatch({
        type: ACTIONS.DELETE_TIMER,
        id,
        payload: {
            idPrevTimer,
        },
    });
};

/**
 * @param {String} id
 * @param {Boolean} isNext
 * @return {{type: string, payload: {id: String}}}
 */
export const playTimer = (id, isNext) => {
    return (dispatch, getState) => {
        if (getAllTimers(getState()).findIndex(timer => timer.state === 'play') !== -1) {
            return;
        }

        const timer = getState().timers.byId[id];
        // TODO: временный запрет за запуск групп таймеров

        if (timer.childTimers || !timer.left) {
            return;
        }

        dispatch(tick(id));
        dispatch({
            type: ACTIONS.PLAY_TIMER,
            id,
        });

        if (isNext) {
            dispatch(playNextTimer());
        }
    };
};

/**
 * @return {{type: string, payload: {id: String}}}
 */
export const playNextTimer = () => {
    return ({
        type: ACTIONS.PLAY_NEXT_TIMER,
    });
};

/**
 * @param {String} id
 * @return {{type: string, payload: {id: String}}}
 */
export const pauseTimer = id => {
    return {
        type: ACTIONS.PAUSE_TIMER,
        id,
    };
};

/**
 * @param {String} id
 * @return {{type: string, payload: {id: String}}}
 */
export const stopTimer = id => {
    return dispatch => {
        // dispatch(startAudio('stop'));
        // TODO: убрать отдельный action - запускать в reducer audio по action.stop_timer
        dispatch({
            type: ACTIONS.STOP_TIMER,
            id,
        });
    };
};

/**
 * @param {String} id
 * @return {{type: String, id: String}}
 * @private
 */
const _tick = id => {
    return {
        type: ACTIONS.TICK,
        id,
    };
};

/**
 * @param {String} id
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
                dispatch(playTimer(timer.next, true));
            }
        }
    };
};
