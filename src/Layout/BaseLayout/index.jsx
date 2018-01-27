import React, {Component} from 'react';
import './index.css';

import muiThemeable from 'material-ui/styles/muiThemeable';
import Navbar from '../../Components/Navbar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import TimersContainer from '../../Container/TimersContainer';
import Player from '../../Container/PlayerContainer';
import EditForm from '../../Container/EditFormContainer';

/**
 * @class
 * @classdesc component for base layout app. No state, props
 */
class BaseLayout extends Component {
    /**
     * @return {jsx}
     */
    render() {
        return (
            <div className='l-base'
                 style={{
                     backgroundColor: this.props.muiTheme.palette.bgPrimary,
                     color: this.props.muiTheme.palette.textPrimary,
                 }}>
                <Navbar className='l-base__navbar' />
                <main className="l-base__main">
                    <Header />
                    <div className='l-base__timer-list'>
                        <TimersContainer
                            style={{
                                overflowY: 'auto',
                            }}
                        />
                    </div>

                </main>
                <Footer className={'l-base__footer'}/>
                <Player />
                <EditForm />
            </div>
        );
    }
}

export default muiThemeable()(BaseLayout);
