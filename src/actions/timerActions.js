import {ACTIONS} from '../constants/actions';

export const idSelectedTimer = id => {
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
        type: ACTIONS.SELECTED_TIMER,
        payload: {
            title: timer.title,
            description: timer.description,
            value: timer.value,
        },
    }
};
