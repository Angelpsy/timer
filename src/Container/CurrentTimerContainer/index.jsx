import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CurrentTimer from  '../../Components/CurrentTimer';

import {timerShape} from '../../constants/propTypes';
import {selectedTimer,
    playTimer,
    pauseTimer,
    stopTimer,
} from '../../actionCreators';

class CurrentTimerContainer extends Component {
    render() {
        if (this.props.selectedTimer) {
        return (
            <CurrentTimer
                resetSelectTimer={this.props.resetSelectTimer}
                playTimer={this.props.playTimer}
                pauseTimer={this.props.pauseTimer}
                stopTimer={this.props.stopTimer}
                {...this.props.selectedTimer}
            />
        );
        } else {
            return null;
        }
    }
}

// TODO: продумать как передавать value group timer
const mapStateToProps = state => {
    return {
        selectedTimer: state.selectedTimer ? state.timers.byId[state.selectedTimer] : null,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        resetSelectTimer: () => {
            dispatch(selectedTimer(''));
        },
        playTimer: (id) => {
            dispatch(playTimer(id));
        },
        pauseTimer: (id) => {
            dispatch(pauseTimer(id));
        },
        stopTimer: (id) => {
            dispatch(stopTimer(id));
        },
    }
};

CurrentTimerContainer.propTypes = {
    resetSelectTimer: PropTypes.func.isRequired,
    selectedTimer: PropTypes.shape(timerShape),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CurrentTimerContainer);
