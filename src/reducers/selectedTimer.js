import {ACTIONS} from '../constants/actions';

const idSelectedTimer = (state = '0', action) => {
    switch (action.type) {
        case ACTIONS.SELECTED_TIMER:
            return action.payload.id;
        default:
            return state
    }
};

export default idSelectedTimer
