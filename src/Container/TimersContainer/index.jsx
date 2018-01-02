import React, {Component} from 'react';
import { connect } from 'react-redux';

import SelectableList from './SelectableList';
import {ListItem} from 'material-ui/List';
import Timer from '../../Components/Timer';

import {timers} from './TestData';

import {idSelectedTimer} from '../../actions';

class TimersContainer extends Component {
    state = {
        timers,
    };

    onSelectTimer = (timer) => {
        this.props.onSelectTimer(timer.id);
    };

    render() {
        return (
            <SelectableList
                selectedId={this.props.idSelectedTimer} >
                {
                    this.state.timers
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
            </SelectableList>
        );
    }
}

const mapStateToProps = state => {
    return {
        idSelectedTimer: state.idSelectedTimer,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectTimer: id => {
            dispatch(idSelectedTimer(id));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TimersContainer);

