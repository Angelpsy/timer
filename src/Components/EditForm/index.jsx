import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import './index.css';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {secToHMS, hmsToSec} from '../../helpers/formatted';
import ValueInput from './ValueInput';

const styleDialog = {
    width: '98%',
};

/**
 * @param {Object} props
 * @return {*[]}
 * @constructor
 */
const actions = props => {
    const stylesButtons = {};
    if (props.timer) {
        stylesButtons.minWidth = '0';
    }

    return [
        props.timer ?
            <FlatButton
                label="Delete Timer"
                secondary={true}
                onClick={props.onClose}
                style={stylesButtons}
            /> : null,
        <FlatButton
            label="Cancel"
            default={true}
            onClick={props.onClose}
            style={stylesButtons}
        />,
        <FlatButton
            label={`${props.timer ? 'Save' : 'Add'}`}
            primary={true}
            keyboardFocused={false}
            onClick={props.onSave}
            style={stylesButtons}
        />,
    ];
};

const defaultTimer = {
    title: '',
    description: '',
    value: 0,
    left: 0,
};

class EditForm extends Component {
    state = {
        title: '',
        description: '',
        value: 0,
    };
    componentWillMount() {
        if (this.props.isOpen) {
            this.changeTimer();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen && !this.props.isOpen) { // if new timer
            this.changeTimer(nextProps.timer);
        }
    }

    /**
     * @param {Object=} timer
     */
    changeTimer = (timer = this.props.timer) => {
        this.setState({
            title: timer ? timer.title : '',
            description: timer ? timer.description : '',
            value: timer ? timer.value : 0,
        });
    };

    /**
     * @param {Event} e
     */
    onChangeInput = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    /**
     * @param {Number} value
     */
    onChangeValue = value => {
        this.setState({
            value,
        });
    };

    onSave = () => {
        if (this.props.timer) {
            this.props.onSaveTimer(this.props.timer.id, {
                title: this.state.title,
                description: this.state.description,
                value: this.state.value,
            });
        } // TODO: добавить addTimer после реализации возможности добавления таймера
        this.props.onClose();
    };

    render() {
        const timer = this.props.timer || defaultTimer;
        const {title, description, value} = this.state;
        return (
            <Dialog
                className='b-edit-form'
                title={this.props.titleForm}
                actions={actions({...this.props, onSave: this.onSave})}
                modal={false}
                open={this.props.isOpen}
                onRequestClose={this.props.onClose}
                actionsContainerStyle={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                }}
                contentStyle={styleDialog}
            >
                {/* TODO: сделать отдельным компонентом, чтобы не было дополнительного рендера при смене left*/}
                <form className="b-edit-form__form">
                    <label className="b-edit-form__field">
                        <span className="b-edit-form__field-name">Title:</span>
                        <input className="b-edit-form__field-input"
                               name="title"
                               value={title}
                               onChange={this.onChangeInput}
                        />
                    </label>

                    <label className="b-edit-form__field">
                        <span className="b-edit-form__field-name">Description:</span>
                        <textarea className="b-edit-form__field-textarea"
                               name="description"
                               value={description}
                               onChange={this.onChangeInput}
                        />
                    </label>

                    <label className="b-edit-form__field">
                        <div className="b-edit-form__field-name">Value:</div>
                        <ValueInput
                            name="value"
                            className="b-edit-form__field-input-value"
                            value={value}
                            onChange={this.onChangeValue}
                        />
                    </label>
                </form>

                {/* TODO: сделать отдельным компонентом, чтобы не было дополнительного рендера при смене left*/}
                {timer.id && timer.state !== 'stop' ?
                    <div>Left: {JSON.stringify(secToHMS(timer.left))}</div>
                    : null}
            </Dialog>
        );
    }
}

// EditForm.propTypes = {};
// EditForm.defaultProps = {};

export default EditForm;
