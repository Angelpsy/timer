import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {List, makeSelectable} from 'material-ui/List';

function wrapState(ComposedComponent) {
    return class SelectableList extends Component {
        static propTypes = {
            children: PropTypes.node.isRequired,
            defaultValue: PropTypes.string,
        };

        componentWillMount() {
            this.setState({
                selectedId: this.props.defaultValue || '',
            });
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.defaultValue !== undefined && nextProps.defaultValue !== this.state.selectedId) {
                this.setState({
                    selectedId: nextProps.defaultValue,
                });
            }
        }

        handleRequestChange = (event, id) => {
            this.setState({
                selectedId: id,
            });
        };

        render() {
            return (
                <ComposedComponent
                    value={this.state.selectedId}
                    onChange={this.handleRequestChange}
                    style={{padding: 0}}
                >
                    {this.props.children}
                </ComposedComponent>
            );
        }
    };
}

const SelectableList = wrapState(makeSelectable(List));

export default SelectableList;
