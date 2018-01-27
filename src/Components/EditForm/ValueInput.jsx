import React, {PureComponent} from 'react';
import {secToHMS, hmsToSec} from '../../helpers/formatted';
import PropTypes from 'prop-types';

/**
 * @param {{amount: Number, selectValue: Number}} props
 * @return {JSX}
 */
function Options(props) {
    const els = [];
    for (let i = 0; i < props.amount; i++) {
        els.push(
            <option key={i} value={i}>{i >= 10 ? i : `0${i}`}</option>
        );
    }
    return els;
}

class ValueInput extends PureComponent {
    onChange = e => {
        this.props.onChange(
            hmsToSec({
            ...secToHMS(this.props.value),
            [e.target.name]: e.target.value,
        })
        );
    };

    render() {
        const value = secToHMS(this.props.value);
        return (
            <div className={`b-value-input ${this.props.className}`}>
                <label className="b-value-input__field">
                    <div className="b-value-input__field-name">Hours</div>
                    <select
                        className="b-value-input__field-input"
                        name="hours"
                        value={value.hours}
                        onChange={this.onChange}>
                        <Options amount={24} selectValue={value.hours}/>
                    </select>
                </label>
                <label className="b-value-input__field">
                    <div className="b-value-input__field-name">Minutes</div>
                    <select
                        className="b-value-input__field-input"
                        name="minutes"
                        value={value.minutes}
                        onChange={this.onChange}>
                        <Options amount={60} selectValue={value.minutes}/>
                    </select>
                </label>
                <label className="b-value-input__field">
                    <div className="b-value-input__field-name">Seconds</div>
                    <select
                        className="b-value-input__field-input"
                        name="seconds"
                        value={value.seconds}
                        onChange={this.onChange}>
                        <Options amount={60} selectValue={value.seconds}/>
                    </select>
                </label>
            </div>
        );
    }
}

ValueInput.propTypes = {
    className: PropTypes.string,
    value: PropTypes.number.isRequired,
};

export default ValueInput;
