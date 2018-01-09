import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CurrentTimer from  '../../Components/CurrentTimer';

import {timerShape} from '../../constants/propTypes';
import {selectedTimer} from "../../actions";

class CurrentTimerContainer extends Component {
    render() {
        if (this.props.selectedTimer) {
        return (
            <CurrentTimer
                resetSelectTimer={this.props.resetSelectTimer}
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
        selectedTimer: state.selectedTimer ? state.timers.find(timer => timer.id === state.selectedTimer) : null,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        resetSelectTimer: () => {
            dispatch(selectedTimer(''));
        }
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
