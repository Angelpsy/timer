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
