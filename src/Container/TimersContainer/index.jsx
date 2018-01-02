import React, {Component} from 'react';

import SelectableList from './SelectableList';
import {ListItem} from 'material-ui/List';
import Timer from '../../Components/Timer';

import {timers} from './TestData';

class TimersContainer extends Component {
    state = {
        timers,
        idSelected: timers[0].id,
    };

    componentDidMount() {
        console.log(this.state.idSelected);
        // setTimeout(() => {
        //     this.setState({
        //         idSelected: '',
        //     });
        // }, 2500);
    };

    onSelectTimer = (timer) => {
        console.log(timer);
    };

    render() {
        return (
            <SelectableList defaultValue={this.state.idSelected}>
                {
                    this.state.timers
                        .filter(timer => timer.isTopLevel)
                        .sort((timerA, timerB) => timerA.order - timerB.order)
                        .map((timer) => {
                            return (
                                <ListItem
                                    value={timer.id}
                                    key={timer.id}
                                    onClick={this.onSelectTimer.bind(this, timer)}
                                >
                                    <Timer {...timer}/>
                                </ListItem>
                            );
                        })
                }
            </SelectableList>
        );
    }
}

export default TimersContainer;

