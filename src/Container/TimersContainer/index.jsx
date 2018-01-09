import React, {Component} from 'react';
import {connect} from 'react-redux';

import SelectableList from './SelectableList';
import {ListItem} from 'material-ui/List';
import Timer from '../../Components/Timer';

import {selectedTimer} from '../../actions';

class TimersContainer extends Component {

    // componentDidMount() {
    //     this.props.resizeNavbar({height: 30});
    // }

    onSelectTimer = (timer) => {
        this.props.onSelectTimer(timer.id);
    };

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
            </SelectableList>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedTimer: state.selectedTimer,
        timers: state.timers,
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

