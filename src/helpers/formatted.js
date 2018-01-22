/**
 * @param {number} sec
 * @return {{hours: number, minutes: number, seconds: number}}
 */
export const secToHMS = sec => {
    const hours = Math.floor(sec / (60*60));
    const minutes = Math.floor((sec - hours*60*60) / 60);
    const seconds = sec - hours*60*60 - minutes*60;

    return {
        hours,
        minutes,
        seconds,
    };
};

/**
 * @param {{hours: number, minutes: number, seconds: number}} obj
 * @return {number}
 */
export const hmsToSec = ({hours, minutes, seconds}) => hours*60*60 + minutes*60 + seconds;
