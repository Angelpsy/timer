import {ACTIONS} from '../constants/actions';

/**
 * @param {{isOpen: boolean, idTimerForEdit: id}} state
 * @param {{type: String}} action
 * @return {{isOpen: boolean, idTimerForEdit: id}}
 */
const editForm = (state = {
    isOpen: false,
    idTimerForEdit: null,
}, action) => {
    switch (action.type) {
        case ACTIONS.OPEN_EDIT_FORM_TIMER:
            return {
                ...state,
                isOpen: true,
            };
        case ACTIONS.CLOSE_EDIT_FORM_TIMER:
            return {
                ...state,
                isOpen: false,
                idTimerForEdit: null,
            };
        case ACTIONS.SELECTED_TIMER_FOR_EDIT:
            return {
                ...state,
                idTimerForEdit: action.id,
            };
        default:
            return state;
    }
};

export default editForm;
