import {ACTIONS} from '../constants/actions';

const selectedTimer = (state = '0', action) => {
    switch (action.type) {
        case ACTIONS.SELECTED_TIMER:
            return action.payload.id;
        default:
            return state
    }
};

export default selectedTimer
