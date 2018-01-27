import {ACTIONS} from '../constants/actions';

/**
 * @return {{type: string}}
 */
export const openEditForm = () => {
    return {
        type: ACTIONS.OPEN_EDIT_FORM_TIMER,
    };
};

/**
 * @return {{type: string}}
 */
export const closeEditForm = () => {
    return {
        type: ACTIONS.CLOSE_EDIT_FORM_TIMER,
    };
};

/**
 * @param {id} id
 * @return {{type: string}}
 */
export const selectedTimerForEdit = id => dispatch => {
    dispatch(openEditForm());
    dispatch({
        type: ACTIONS.SELECTED_TIMER_FOR_EDIT,
        id,
    });
};


