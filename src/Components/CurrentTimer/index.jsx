import React, {Component} from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import IconClose from 'material-ui/svg-icons/navigation/close';
import IconPlay from 'material-ui/svg-icons/av/play-arrow';
import IconPause from 'material-ui/svg-icons/av/pause';
import IconStop from 'material-ui/svg-icons/av/stop';

import './index.css';
import {timerShape} from "../../constants/propTypes";

const buttonStyles = {
    marginRight: 12,
};

const iconStyles = {
    width: '75%',
};

function Button(props) {
    return <FloatingActionButton
        mini={true}
        style={buttonStyles}
        {...props}/>
}

function TimesVal(prop) {
    const classNames = `b-current-timer__time-val ${prop.className}`;
    const hours = Math.floor(prop.val / (60*60));
    const minutes = Math.floor((prop.val - hours*60*60) / 60);
    const seconds = prop.val - hours*60*60 - minutes*60;
    const output = `${hours > 0 ? hours + 'h:' : ''}
                    ${minutes > 10 ? minutes : '0' + minutes}m:
                    ${seconds > 10 ? seconds : '0' + seconds}s`;
    return (
        <div {...prop} className={classNames} >
            {output}
        </div>
    );
}

class CurrentTimer extends Component {

    toggleState(state) {
      if (state === this.props.state) {
          return;
      }

      this.props[`${state}Timer`](this.props.id);
    }

    render() {
        const {
            id,
            title,
            description,
            childTimers,
            value,
            left,
            state
        } = this.props;
        return (
            <div
                className={'b-current-timer'}
            >
                <div className="b-current-timer__info">
                    <div className="b-current-timer__title">{title}</div>

                    <div>
                        {childTimers
                            ? 'GroupTimer'
                            : 'SoloTimer'
                        }
                    </div>

                    <div className="b-current-timer__state">{state}</div>
                </div>

                <div className="b-current-timer__controls">
                    <div className="b-current-timer__btns">
                        <Button
                            disabled={state === 'play'}
                            onClick={this.toggleState.bind(this, 'play')}
                        >
                            <IconPlay style={iconStyles} />
                        </Button>
                        <Button
                            disabled={state !== 'play'}
                            onClick={this.toggleState.bind(this, 'pause')}
                        >
                            <IconPause style={iconStyles} />
                        </Button>
                        <Button
                            disabled={state === 'stop'}
                            onClick={this.toggleState.bind(this, 'stop')}
                        >
                            <IconStop style={iconStyles} />
                        </Button>
                    </div>

                    <div className="b-current-timer__times">
                        <TimesVal
                            className="b-current-timer__left"
                            val={left}
                            style={{
                                color: this.props.muiTheme.palette.accent1Color,
                                opacity: left !== value ? 1 : 0,
                            }}
                        />
                        <TimesVal
                            className="b-current-timer__value"
                            val={value}
                            style={{
                                color: this.props.muiTheme.palette.primary1Color,
                            }}
                        />
                    </div>
                </div>

                {/*<IconButton key={'icon'}*/}
                            {/*className={'b-footer__close'} // TODO: заменить класс и  переместить стили*/}
                            {/*onClick={this.props.resetSelectTimer}*/}
                {/*>*/}
                    {/*<IconClose />*/}
                {/*</IconButton>*/}
            </div>
        );
    }
}

CurrentTimer.propTypes = {
    playTimer: PropTypes.func.isRequired,
    pauseTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired,
    ...timerShape};

export default muiThemeable()(CurrentTimer);
