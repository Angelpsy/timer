import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconPlay from 'material-ui/svg-icons/av/play-arrow';
import IconPause from 'material-ui/svg-icons/av/pause';
import IconStop from 'material-ui/svg-icons/av/stop';

import muiThemeable from 'material-ui/styles/muiThemeable';

const buttonStyles = {
    marginRight: 24,
};

const iconStyles = {
    width: '75%',
};

const iconEmum = {
    play: IconPlay,
    pause: IconPause,
    stop: IconStop,
};

class Timer extends Component {

    render() {
        const {id, title, description, childs, value, left, state} = this.props;

        const IconState = iconEmum[state];

        return (
            <div className={'b-timer'}>
                <Subheader
                    className="b-timer__header"
                    style={{
                        lineHeight: 'inherit',
                        paddingLeft: 0,
                        paddingBottom: 8,
                    }}
                >{title}</Subheader>
                <div className="b-timer__main">
                    <div className="b-timer__btns">
                        <FloatingActionButton
                            style={buttonStyles}
                            disabled={true}
                        >
                            <IconState state={state} style={iconStyles} />
                        </FloatingActionButton>
                    </div>

                    <div className="b-timer__values" style={{
                        color: this.props.muiTheme.palette.textSecondary,
                        fontSize: '2em'
                    }}>
                        {state !== 'stop' ?
                            <span className="b-timer__left"
                                  style={{
                                      fontSize: '1.1em'
                                  }}
                            >{left}s /</span>
                        : null}
                        <span className="b-timer__value">{value}s</span>
                    </div>
                </div>
            </div>
        );
    }
}

Timer.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    child: PropTypes.array,
    value: PropTypes.number.isRequired,
    left: (props, propName, componentName) => {
        if (props.value < props[propName] || props[propName] < 0) {
            return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    },
    state: PropTypes.oneOf(['stop', 'pause', 'play']).isRequired,
};

export default muiThemeable()(Timer);
