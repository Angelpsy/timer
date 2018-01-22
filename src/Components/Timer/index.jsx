import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

import SoloTimer from './SoloTimer';

class Timer extends Component {
    render() {
        const {childTimers} = this.props;

        if (!childTimers || childTimers.length === 0) {
            return <SoloTimer {...this.props}/>;
        } else {
            // TODO: timerGroup
            return (
                <div>
                    timerGroup
                </div>
            );
        }
    }
}

Timer.propTypes = {
    child: PropTypes.array,
    isTopLevel: PropTypes.bool,
};

export default Timer;
