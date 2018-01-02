import {ACTIONS} from '../constants/actions';

export const selectedTimer = id => {
    return {
        type: ACTIONS.SELECTED_TIMER,
        payload: {
            id,
        },
    }
};
