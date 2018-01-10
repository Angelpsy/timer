import {ACTIONS} from '../constants/actions';


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
    return {
        type: ACTIONS.PLAY_TIMER,
        payload: {
            id,
        },
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
export const tickTimer = id => {
    return {
        type: ACTIONS.TICK_TIMER,
        payload: {
            id,
        },
    }
};
