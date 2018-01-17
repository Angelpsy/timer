import {ACTIONS} from '../constants/actions';

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
        if (getState().timers.findIndex(timer => timer.state === 'play') !== -1) {
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

        // const timers = getState().timers;

        // TODO временное решение, чтобы убрать группы таймеров
        const {timers} = getState();

        const timer = timers.find(timer => timer.id === id);

        if (!timer || timer.state !== 'play') {
            return;
        }

        dispatch(_tick(timer.id));

        if (timer.left > 1) {
            dispatch(tick(timer.id));
        } else {
            dispatch(stopTimer(timer.id));

            const timersInOneLevel = timers.filter(timer => timer.isTopLevel && !timer.childTimers);
            const index = timersInOneLevel.findIndex(t => t === timer);

            if (timersInOneLevel[index + 1]) {
                dispatch(playTimer(timersInOneLevel[index + 1].id))
            }
        }

    };
};
