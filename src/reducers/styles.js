import {ACTIONS} from '../constants/actions';

const defaultStyles = {
    navbar: {
        height: 0,
    },
    header: {
        height: 0,
    },
    footer: {
        height: 0,
    },
};

const styles = (state = defaultStyles, action) => {
    switch (action.type) {
        case ACTIONS.SET_HEIGHT_NAVBAR:
            return {...state, navbar: {
                    height: action.payload.height,
                }};
        case ACTIONS.SET_HEIGHT_HEADER:
            return {...state, header: {
                    height: action.payload.height,
                }};
        case ACTIONS.SET_HEIGHT_FOOTER:
            return {...state, footer: {
                    height: action.payload.height,
                }};
        default:
            return state
    }
};

export default styles
