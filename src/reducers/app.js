import {ACTIONS} from '../constants/actions';

const app = (state = {init: false}, action) => {
    switch (action.type) {
        case ACTIONS.APP_INIT_START:
            return {
                ...state,
                init: false,
            };
        case ACTIONS.APP_INIT_STOP:
            return {
                ...state,
                init: true,
            };
        default:
            return state
    }
};

export default app;
