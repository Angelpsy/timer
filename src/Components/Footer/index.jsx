import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Toolbar} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import IconClose from 'material-ui/svg-icons/navigation/close';
import muiThemeable from 'material-ui/styles/muiThemeable';

import './index.css';
import {idSelectedTimer} from "../../actions";

class Footer extends Component {
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
                }}>
                    Footer (Current Timer)
                    <IconButton
                        className={'b-footer__close'}
                        onClick={this.props.resetSelectTimer}
                        style={{
                            opacity: this.props.idSelectedTimer ? 1 : 0,
                        }}
                    >
                        <IconClose />
                    </IconButton>
                </Toolbar>
            </footer>
        );
    }
}

const mapStateToProps = state => {
    return {
        idSelectedTimer: state.idSelectedTimer,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        resetSelectTimer: () => {
            dispatch(idSelectedTimer(''));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(muiThemeable()(Footer));
