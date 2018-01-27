import React from 'react';
import './index.css';

import {secToHMS} from '../../helpers/formatted';
import muiThemeable from 'material-ui/styles/muiThemeable';

/**
 * @param {{className: String, val: Number, isshort: any}} props
 * @return {JSX}
 */
function TimeVal(props) {
    const classNames = `b-time-val ${props.className || ''}`.trim();

    const valObj = secToHMS(props.val);
    const output = `${valObj.hours > 0 ? valObj.hours + 'h:' : ''}
                    ${!props.isshort || valObj.minutes > 0 ?
                        valObj.minutes >= 10 ? valObj.minutes : '0' + valObj.minutes + 'm:'
                        : ''
                    }
                    ${valObj.seconds >= 10 ? valObj.seconds : '0' + valObj.seconds}s`;
    return (
        <div
            style={{color: props.isLeft
                    ? props.muiTheme.palette.accent1Color
                    : props.muiTheme.palette.primary1Color,
                    ...props.style}}
             className={classNames}
        >
            {output}
        </div>
    );
}

export default muiThemeable()(TimeVal);
