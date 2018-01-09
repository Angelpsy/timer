import {ACTIONS} from '../constants/actions';

/**
 * @param {{height: Number}}
 * @return {{type: string, payload: {height: Number}}}
 */
export const resizeNavbar = ({height}) => {
    return {
        type: ACTIONS.SET_HEIGHT_NAVBAR,
        payload: {
            height,
        },
    }
};

/**
 * @param {{height: Number}}
 * @return {{type: string, payload: {height: Number}}}
 */
export const resizeHeader = ({height}) => {
    return {
        type: ACTIONS.SET_HEIGHT_HEADER,
        payload: {
            height,
        },
    }
};

/**
 * @param {{height: Number}}
 * @return {{type: string, payload: {height: Number}}}
 */
export const resizeFooter = ({height}) => {
    return {
        type: ACTIONS.SET_HEIGHT_FOOTER,
        payload: {
            height,
        },
    }
};
