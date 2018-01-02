import {ACTIONS} from '../constants/actions';

export const idSelectedTimer = id => {
    return {
        type: ACTIONS.SELECTED_TIMER,
        payload: {
            id,
        },
    }
};
