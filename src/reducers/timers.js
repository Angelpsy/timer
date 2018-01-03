import {ACTIONS} from '../constants/actions';
import nanoid from 'nanoid';

import {timers as _timers} from '../Container/TimersContainer/TestData';

const timers = (state = _timers, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TIMER:
            return [
                ...state,
                {
                    id: nanoid(),
                    order: 0,
                    title: action.payload.title,
                    description: action.payload.description,
                    childTimers: null,
                    value: action.payload.value,
                    left: action.payload.value,
                    state: 'stop',
                }
            ];
        default:
            return state
    }
};

export default timers
