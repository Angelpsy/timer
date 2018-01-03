import React, {Component} from 'react';
import './index.css';

import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconPlay from 'material-ui/svg-icons/av/play-arrow';
import IconPause from 'material-ui/svg-icons/av/pause';
import IconStop from 'material-ui/svg-icons/av/stop';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {timerShape} from "../../constants/propTypes";

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
        const {id, title, description, childTimers, value, left, state} = this.props;

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
                        {/*
                        TODO: Иконку состояния убрать в верхний ряд, сделать мелкой, кнопку убрать совсем
                        во втором ряду иконка на выбор\превью изображения\текст описания мелким шрифтом
                        при наличии дочерних во втором ряду значок\кнопка для разворачивания\сворачивания
                        */}
                        <FloatingActionButton
                            style={buttonStyles}
                            disabled={true}
                        >
                            <IconState state={state} style={iconStyles} />
                        </FloatingActionButton>
                    </div>

                    <div className="b-timer__values" style={{
                        color: this.props.muiTheme.palette.textSecondary,
                        fontSize: '1.75em'
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

Timer.propTypes = timerShape;

export default muiThemeable()(Timer);
