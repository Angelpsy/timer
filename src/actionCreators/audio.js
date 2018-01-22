import {ACTIONS} from '../constants/actions';

/**
 * @param {String} type
 * @return {{type: string, payload: {type: String}}}
 */
export const startAudio = type => ({
        type: ACTIONS.START_AUDIO,
        payload: {
            type,
        },
    });

/**
 * @return {{type: String}}
 */
export const stopAudio = () => ({
        type: ACTIONS.STOP_AUDIO,
    });
