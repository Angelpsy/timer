import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import BaseLayout from './Layout/BaseLayout';
import Preloader from './Components/Preloader';

import color from './constants/colors';
import {appInit} from "./actionCreators";

const muiTheme = getMuiTheme(baseTheme);

muiTheme.palette = { ...muiTheme.palette, ...color};

class App extends Component {
    componentWillMount() {
        this.props.initApp();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                {this.props.preloader ?
                    <Preloader />
                :
                    <BaseLayout />
                }
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = state => {
    return {
        preloader: !state.app.init,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        initApp: () => {
            dispatch(appInit());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
