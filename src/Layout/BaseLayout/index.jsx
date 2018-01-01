import React, {Component} from 'react';
import './index.css';

import muiThemeable from 'material-ui/styles/muiThemeable';
import AppToolbar from '../../Components/Topbar';

class BaseLayout extends Component {
    render() {
        return (
            <div className='l-base'
                 style={{
                     backgroundColor: this.props.muiTheme.palette.bgPrimary,
                 }}>
                <AppToolbar />
            </div>
        );
    }
}

export default muiThemeable()(BaseLayout);
