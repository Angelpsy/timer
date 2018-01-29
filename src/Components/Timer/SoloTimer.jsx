import React, {Component} from 'react';
import './index.css';
import PropTypes from 'prop-types';


import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconPlay from 'material-ui/svg-icons/av/play-arrow';
import IconPause from 'material-ui/svg-icons/av/pause';
import IconStop from 'material-ui/svg-icons/av/stop';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {timerShape} from '../../constants/propTypes';

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

/**
 * @param {Object} props
 * @return {JSX}
 */
const MenuItemForDropDown = props => <MenuItem {...props} style={{minWidth: '150px'}}/>;

class Timer extends Component {
    state = {
        isOpenMenu: false,
    };

    handleClickMore = e => {
        this.setState({
            isOpenMenu: !this.state.isOpenMenu,
            anchorEl: e.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            isOpenMenu: false,
        });
    };

    handleClickEdit = () => {
        this.props.onSelectTimerForEdit(this.props.id);
        this.handleRequestClose();
    };

    handleClickDelete = () => {
        this.props.onDeleteTimer(this.props.id);
        this.handleRequestClose();
    };

    render() {
        const {
            // id,
            title,
            // description,
            // childTimers,
            value,
            left,
            state,
        } = this.props;

        const IconState = iconEmum[state];

        return (
            <div className={'b-timer'}>
                <div className="b-timer__more" onClick={e => e.stopPropagation()}>
                    <IconButton onClick={this.handleClickMore}><MoreVertIcon /></IconButton>
                    <Popover
                        open={this.state.isOpenMenu}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={this.handleRequestClose}
                        animation={PopoverAnimationVertical}
                        useLayerForClickAway={false}
                    >
                        <Menu>
                            <MenuItemForDropDown
                                onClick={this.handleClickEdit}
                                primaryText="Edit"
                            />
                            <MenuItemForDropDown
                                onClick={this.handleClickDelete}
                                primaryText="Delete"
                            />
                        </Menu>
                    </Popover>
                </div>
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
                        fontSize: '1.75em',
                    }}>
                        {state !== 'stop' ?
                            <span className="b-timer__left"
                                  style={{
                                      fontSize: '1.1em',
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
    ...timerShape,
    onSelectTimerForEdit: PropTypes.func.isRequired,
    onDeleteTimer: PropTypes.func.isRequired,
};

export default muiThemeable()(Timer);
