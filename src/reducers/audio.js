import {ACTIONS} from '../constants/actions';

const audio = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.PLAY_NEXT_TIMER:
            return {
                ...state,
                isPlay: true,
                type: 'start',
            };
        case ACTIONS.STOP_TIMER:
            return {
                ...state,
                isPlay: true,
                type: 'stop',
            };
        case ACTIONS.STOP_AUDIO:
            return {
                ...state,
                isPlay: false,
            };
        default:
            return state
    }
};

export default audio;
