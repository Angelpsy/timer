import React, {Component} from 'react';
import {connect} from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './index.css';

import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {openEditForm} from '../../actionCreators';

const styleButtonAdd = {
    position: 'relative',
    right: '-20px',
};

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
                    <ToolbarGroup>
                        <FloatingActionButton
                            onClick={this.props.onClickAddTimer}
                            mini={true}
                            style={styleButtonAdd}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}

/**
 * @param {Function} dispatch
 * @return {{onAddTimer: function()}}
 */
const mapDispatchToProps = dispatch => {
    return {
        onClickAddTimer: () => {
            dispatch(openEditForm());
        },
    };
};

const HeaderContainer = connect(null, mapDispatchToProps)(Header);
export default muiThemeable()(HeaderContainer);
