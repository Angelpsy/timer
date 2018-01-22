import {ACTIONS} from '../constants/actions';

/**
 * @param {String} state
 * @param {{type: String, id: String}} action
 * @return {string}
 */
const selectedTimer = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.SELECTED_TIMER:
            return action.id;
        default:
            return state;
    }
};

export default selectedTimer;
