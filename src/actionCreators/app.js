import {getTimers} from './index';

import {ACTIONS} from '../constants/actions';

export const appInit = () => {
    return async dispatch => {
        dispatch({
            type: ACTIONS.APP_INIT_START,
        });

        await dispatch(getTimers());

        dispatch({
            type: ACTIONS.APP_INIT_STOP,
        });
    }
};
