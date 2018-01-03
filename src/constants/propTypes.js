import PropTypes from 'prop-types';

export const timerShape = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
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
    isTopLevel: PropTypes.bool,
};
