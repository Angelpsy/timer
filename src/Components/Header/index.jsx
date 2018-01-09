import React, {Component} from 'react';
import './index.css';

import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import muiThemeable from 'material-ui/styles/muiThemeable';

import wrapComponentWithResize from '../ComponentWithResize';

class Header extends Component {
    render() {
        return (
            <header className='b-header'>
                <Toolbar
                    style={{
                        backgroundColor: this.props.muiTheme.palette.bgTertiary,
                    }}>
                    <ToolbarGroup>
                        <ToolbarTitle text={'Header (breadcrumbs)'}/>
                        {/* TODO: Хлебные крошки выделенного таймера + название /
                        данные по таймеру по время работы таймера (? возможно будет достаточно в footer`е) */}
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}

export default muiThemeable()(
    wrapComponentWithResize(Header, 'header')
);
