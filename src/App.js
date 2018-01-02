import React, {Component} from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import BaseLayout from './Layout/BaseLayout';

import color from './constants/colors';

const muiTheme = getMuiTheme(baseTheme);

muiTheme.palette = { ...muiTheme.palette, ...color};

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <BaseLayout />
            </MuiThemeProvider>
        );
    }
}

export default App;
