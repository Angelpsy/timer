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
        // TODO: вынести в отдельную функцию, с возможностью переиспользовать в ADD_TIMER и RESORT_TIMERS
        case ACTIONS.GET_TIMERS:
            const _obj1 = {};

            // Построение базового дерева
            action.payload.timers.forEach(item => {
                _obj1[item.id] = timer(item, action);
            });

            // Добавление данных о родителях и следующих таймерах для имеющих родителей
            action.payload.timers.forEach(item => {
                if (!item.childTimers) {
                    return;
                }
                item.childTimers
                    .sort((a, b) => _obj1[a].order - _obj1[b].order)
                    .forEach((id, i, arr) => {
                        _obj1[id].next = arr[i + 1] || null;
                        _obj1[id].parent = item.id;
                    });
            });

            // Добавление данных о следующих таймерах для верхнего уровня
            action.payload.timers
                .filter(item => item.isTopLevel)
                .sort((a, b) => a.order - b.order)
                .forEach((item, i, arr) =>
                    _obj1[item.id].next = arr[i + 1] ? arr[i + 1].id : null
                );

            return _obj1;
        // case ACTIONS.ADD_TIMER:
        //     return {
        //         ...state,
        //         [action.id]: timer(null, action),
        //     };
        // case ACTIONS.RESORT_TIMERS:
        //    TODO: Создание родительских и соседних отношений
        case ACTIONS.DELETE_TIMER:
            const tmpState = {...state};

            // TODO: попробовать перенести в middleware
            // change prev_timer.next to deleted_timer.next
            if (action.payload.idPrevTimer) {
                tmpState[action.payload.idPrevTimer] = {
                    ...tmpState[action.payload.idPrevTimer],
                    next: tmpState[action.id].next,
                };
            }
            delete tmpState[action.id];
            return tmpState;
        // TODO: Редактирование родительских отношений, удаление дочерних и внучатых таймеров
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
                .sort((a, b) => a.order - b.order)
                .map(item => item.id);
        case ACTIONS.RESORT_TIMERS:
            // TODO: после реализации добавления/удаления проверить
            return state.map(id => action.payload.timers[id])
                .sort((a, b) => a.order - b.order)
                .map(item => item.id);
        // case ACTIONS.ADD_TIMER:
        //     return [ ...state, timer(null, action).id ];
        case ACTIONS.DELETE_TIMER:
            const index = state.indexOf(action.id);
            if (index === -1) {
                return state;
            }

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1),
            ];
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
