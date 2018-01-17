import React, {Component} from 'react';
import {connect} from 'react-redux';

import SelectableList from './SelectableList';
import {ListItem} from 'material-ui/List';
import Timer from '../../Components/Timer';

import {selectedTimer} from '../../actionCreators';
import {getAllTimers} from '../../reducers';

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
        selectedTimer: state.selectedTimer,
        timers: getAllTimers(state),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectTimer: id => {
            dispatch(selectedTimer(id));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TimersContainer);

