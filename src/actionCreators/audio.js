import {ACTIONS} from '../constants/actions';

export const startAudio = (type) => ({
        type: ACTIONS.START_AUDIO,
        payload: {
            type,
        }
    });

export const stopAudio = () => ({
        type: ACTIONS.STOP_AUDIO,
    });
