import React, {Component} from 'react';
import './index.css';

import AppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';

import wrapComponentWithResize from '../ComponentWithResize';

class Navbar extends Component {
    render() {
        return (
            <AppBar
                title="My Timer"
                style={{
                    backgroundColor: this.props.muiTheme.palette.bgSecondary,
                }}
                titleStyle={{
                    color: this.props.muiTheme.palette.textSecondary,
                }}
                showMenuIconButton={false}
            />
        );
    }
}

export default muiThemeable()(
    wrapComponentWithResize(
        Navbar,
        'navbar',
    )
);
