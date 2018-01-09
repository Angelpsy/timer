import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.css';

import muiThemeable from 'material-ui/styles/muiThemeable';
import Navbar from '../../Components/Navbar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
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
                <main
                    className="l-base__main"
                    style={{
                        height: `calc(100% - ${this.props.style.navbar.height}px)`
                    }}
                >
                    <Header />
                    <div className='l-base__timer-list'
                        style={{
                            height: `calc(100% - ${this.props.style.header.height + this.props.style.footer.height}px)`
                        }}>
                        <TimersContainer />
                    </div>

                </main>
                <Footer className={'l-base__footer'}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        style: state.styles,
    }
};

export default muiThemeable()(
    connect(
        mapStateToProps,
    )(BaseLayout)
);
