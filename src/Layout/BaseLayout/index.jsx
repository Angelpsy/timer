import React, {Component} from 'react';
import './index.css';

import muiThemeable from 'material-ui/styles/muiThemeable';
import Navbar from '../../Components/Navbar';
import Header from '../../Components/Header';
import TimersContainer from '../../Container/TimersContainer';

class BaseLayout extends Component {
    render() {
        return (
            <div className='l-base'
                 style={{
                     backgroundColor: this.props.muiTheme.palette.bgPrimary,
                     color: this.props.muiTheme.palette.textPrimary,
                 }}>
                <Navbar />
                <main className="l-base__main">
                    <Header />
                    <TimersContainer />
                </main>
            </div>
        );
    }
}

export default muiThemeable()(BaseLayout);
