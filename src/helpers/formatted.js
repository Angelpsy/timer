/**
 * @param {number} sec
 * @return {{hours: number, minutes: number, seconds: number}}
 */
export const secToHMS = (sec = 0) => {
    sec = Number.parseFloat(sec);
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
export const hmsToSec = ({hours = 0, minutes = 0, seconds = 0}) =>
    Number.parseFloat(hours)*60*60
    + Number.parseFloat(minutes)*60
    + Number.parseFloat(seconds);
