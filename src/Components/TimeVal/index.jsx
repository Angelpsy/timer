import React from 'react';
import './index.css';

import {secToHMS} from '../../helpers/formatted';

/**
 * @param {{className: String, val: Number, isshort: any}} prop
 * @return {JSX}
 */
function TimeVal(prop) {
    const classNames = `b-time-val ${prop.className || ''}`.trim();

    const valObj = secToHMS(prop.val);
    const output = `${valObj.hours > 0 ? valObj.hours + 'h:' : ''}
                    ${!prop.isshort || valObj.minutes > 0 ?
                        valObj.minutes >= 10 ? valObj.minutes : '0' + valObj.minutes + 'm:'
                        : ''
                    }
                    ${valObj.seconds >= 10 ? valObj.seconds : '0' + valObj.seconds}s`;
    return (
        <div {...prop} className={classNames} >
            {output}
        </div>
    );
}

export default TimeVal;
