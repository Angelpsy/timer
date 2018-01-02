import React, {Component} from 'react';
import { connect } from 'react-redux';

import SelectableList from './SelectableList';
import {ListItem} from 'material-ui/List';
import Timer from '../../Components/Timer';

import {timers} from './TestData';

import {selectedTimer} from '../../actions';

class TimersContainer extends Component {
    state = {
        timers,
        idSelected: timers[0].id,
    };

    componentDidMount() {
        console.log('props.selectedTimer: ', this.props.selectedTimer);
        console.log('props: ', this.props);
        // setTimeout(() => {
        //     this.setState({
        //         idSelected: '',
        //     });
        // }, 2500);
    };

    onSelectTimer = (timer) => {
        console.log(timer);
        this.props.onSelectTimer(timer.id);
    };

    render() {
        return (
            <SelectableList defaultValue={this.state.idSelected}>
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
        selectedTimer: state.selectedTimer,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectTimer: id => {
            dispatch(selectedTimer(id));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TimersContainer);

