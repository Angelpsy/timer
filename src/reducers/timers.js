import {combineReducers} from 'redux';

import {ACTIONS} from '../constants/actions';
import timer from './timer';

/**
 * @param {Object} state
 * @param {{type: String}} action
 * @return {state}
 */
const byId = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.GET_TIMERS:
            const _obj1 = {};

            // Построение базового дерева
            action.payload.timers.forEach(item => {
                _obj1[item.id] = timer(item, action);
            });

            // Добавление данных о родителях для имеющих родителей
            action.payload.timers.forEach(item => {
                if (!item.childTimers) {
                    return;
                }
                item.childTimers
                    .sort((a, b) => _obj1[a].order - _obj1[b].order)
                    .forEach((id, i, arr) => {
                        _obj1[id].parent = item.id;
                    });
            });

            return _obj1;
        case ACTIONS.ADD_TIMER:
            return {
                ...state,
                [action.id]: timer(null, action),
                [action.payload.idPrevTimer]: {
                    ...state[action.payload.idPrevTimer],
                    next: action.id,
                },
            };
        case ACTIONS.DELETE_TIMER:
            const tmpState = {...state};
            delete tmpState[action.id];
            return tmpState;
        // TODO: Редактирование родительских отношений, удаление дочерних и внучатых таймеров
        case ACTIONS.RESORT_TIMERS:
            const _obj = {...state};
            action.payload.allIds
                .map(id => action.payload.byId[id])
                .sort((a, b) => a.order - b.order)
                .forEach((timer, index) => {
                    _obj[timer.id] = {
                        ..._obj[timer.id],
                        next: action.payload.allIds[index + 1] || null,
                        order: index,
                    };
                });
            return _obj;
        case ACTIONS.EDIT_TIMER:
        case ACTIONS.PLAY_TIMER:
        case ACTIONS.PAUSE_TIMER:
        case ACTIONS.STOP_TIMER:
        case ACTIONS.TICK:
            return {
                ...state,
                [action.id]: timer(state[action.id], action),
            };
        default:
            return state;
    }
};

/**
 * @param {String[]} state
 * @param {{type: String}} action
 * @return {state}
 */
const allIds = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.GET_TIMERS:
            return action.payload.timers
                .filter(timer => timer.isTopLevel)
                .map(item => item.id);
        case ACTIONS.ADD_TIMER:
            return [
                ...state,
                action.id,
            ];
        case ACTIONS.DELETE_TIMER:
            const index = state.indexOf(action.id);
            if (index === -1) {
                return state;
            }

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1),
            ];
        case ACTIONS.RESORT_TIMERS:
            return state.map(id => action.payload.byId[id])
                .sort((a, b) => a.order - b.order)
                .map(item => item.id);
        default:
            return state;
    }
};

const timers = combineReducers({
    byId,
    allIds,
});

export default timers;

/**
 * @param {{byId: Object, allIds: Array}} state
 * @return {timer[]}
 */
export const getAllTimers = state => state.allIds.map(id => state.byId[id]);

// TODO: функция фильтрации, возвращающая только список таймеров, которые нужно сейчас отобразить
// (фильтрация по родителю или вывод всех таймеров верхнего уровня, если получено нулевое id в качестве родителя)
