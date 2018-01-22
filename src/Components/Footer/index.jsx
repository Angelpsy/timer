import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Toolbar} from 'material-ui/Toolbar';
import muiThemeable from 'material-ui/styles/muiThemeable';

import CurrentTimerContainer from '../../Container/CurrentTimerContainer';

import './index.css';

/**
 * @class
 * @classdesc Component for footer app
 */
class Footer extends Component {
    /**
     * @return {jsx}
     */
    render() {
        const footerClass = `b-footer ${this.props.className}`;
        return (
            <footer className={footerClass}>
                <Toolbar
                    className={'b-footer__toolbar'}
                    style={{
                        backgroundColor: this.props.muiTheme.palette.bgSecondary,
                        color: this.props.muiTheme.palette.textColor,
                        height: 'auto',
                        minHeight: this.props.muiTheme.toolbar.height + 'px',
                        padding: `${this.props.muiTheme.spacing.desktopGutterLess}px`,
                        display: 'block',
                }}>
                    <CurrentTimerContainer />
                </Toolbar>
            </footer>
        );
    }
}

Footer.propType = {
    className: PropTypes.string,
};

export default muiThemeable()(Footer);
