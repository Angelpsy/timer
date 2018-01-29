import React, {Component} from 'react';
import {connect} from 'react-redux';

import SelectableList from './SelectableList';
import {ListItem} from 'material-ui/List';
import Timer from '../../Components/Timer';

import {
    selectedTimer,
    selectedTimerForEdit,
    deleteTimer,
} from '../../actionCreators';
import {getAllTimers} from '../../reducers';

class TimersContainer extends Component {
    onSelectTimer = id => {
        this.props.onSelectTimer(id);
    };

    render() {
        return (
            <SelectableList
                selectedId={this.props.selectedTimer} >
                {
                    this.props.timers
                        .filter(timer => timer.isTopLevel)
                        .sort((timerA, timerB) => timerA.order - timerB.order)
                        .map(timer => {
                            return (
                                <ListItem
                                    value={timer.id}
                                    key={timer.id}
                                    onClick={() => this.onSelectTimer(timer.id)}
                                >
                                    <Timer
                                        {...timer}
                                        onSelectTimerForEdit={this.props.onSelectTimerForEdit}
                                        onDeleteTimer={this.props.onDeleteTimer}
                                    />
                                </ListItem>
                            );
                        })
                }
            </SelectableList>
        );
    }
}

/**
 * @param {Object} state
 * @return {{selectedTimer: Object, timers: timer[]}}
 */
const mapStateToProps = state => {
    return {
        selectedTimer: state.selectedTimer,
        timers: getAllTimers(state),
    };
};

/**
 * @param {Function} dispatch
 * @return {{onSelectTimer: function(*=)}}
 */
const mapDispatchToProps = dispatch => {
    return {
        onSelectTimer: id => {
            dispatch(selectedTimer(id));
        },
        onSelectTimerForEdit: id => {
            dispatch(selectedTimerForEdit(id));
        },
        onDeleteTimer: id => {
            dispatch(deleteTimer(id));
        },
    };
};

/**
 * @return {Class}
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TimersContainer);

