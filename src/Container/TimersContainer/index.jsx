import React, {Component} from 'react';
import {connect} from 'react-redux';

import SelectableList from './SelectableList';
import {ListItem} from 'material-ui/List';
import Timer from '../../Components/Timer';
import Ticker from '../../Container/Ticker';

import {selectedTimer, tick} from '../../actions';

class TimersContainer extends Component {

    onSelectTimer(timer) {
        this.props.onSelectTimer(timer.id);
    }

    render() {
        return (
            <SelectableList
                selectedId={this.props.selectedTimer} >
                {
                    this.props.timers
                        .filter(timer => timer.isTopLevel)
                        .sort((timerA, timerB) => timerA.order - timerB.order)
                        .map((timer) => {
                            return (
                                <ListItem
                                    value={timer.id}
                                    key={timer.id}
                                    onClick={this.onSelectTimer.bind(this, timer)}
                                >
                                    <Timer {...timer}/>
                                </ListItem>
                            );
                        })
                }
                <Ticker
                    timers={this.props.timersPlaying}
                    tick={this.props.tick}
                />
            </SelectableList>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedTimer: state.selectedTimer,
        timers: state.timers,
        timersPlaying: state.timers.filter((timer) => {
            return timer.state === 'play' && timer.isTopLevel && !timer.childTimers;
            // TODO: продумать логику с группами таймеров
        }),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectTimer: id => {
            dispatch(selectedTimer(id));
        },
        tick: ids => {
            dispatch(tick(ids));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TimersContainer);

