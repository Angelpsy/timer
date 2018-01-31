import ACTION from '../constants/actions';
import {resortTimers as resortTimersAction} from '../actionCreators';

/**
 * @param {Object} store
 * @return {function(*): function(*=)}
 */
const resortTimers = store => next => action => {
    if (action.type !== ACTION.GET_TIMERS
            && action.type !== ACTION.ADD_TIMER
            && action.type !== ACTION.DELETE_TIMER) {
        return next(action);
    }

    const result = next(action);
    store.dispatch(resortTimersAction(store.getState().timers));
    return result;
};

export default resortTimers;
