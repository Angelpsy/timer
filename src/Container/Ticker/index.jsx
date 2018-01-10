import React, {Component} from 'react';

class Ticker extends Component {

    componentDidMount() {
        this.tick();
    }

    componentDidUpdate(prevProps) {
        if ((!prevProps.timers || !prevProps.timers.length) && (this.props.timers && this.props.timers.length)) {
            this.tick();
        }
    }

    async tick() {
        if (!this.props.timers || !this.props.timers.length) {
            return;
        }

        await new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });

        this.props.tick(this.props.timers.map((timer) => {
            return timer.id;
        }));
        this.tick();
    }


    render() {
        return (
            <div style={{'display': 'none'}}>Ticker</div>
        );
    }
}

export default Ticker;
