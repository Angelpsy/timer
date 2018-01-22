import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {List, makeSelectable} from 'material-ui/List';

/**
 * @param {JSX} ComposedComponent
 * @return {SelectableList}
 */
function wrapState(ComposedComponent) {
    return class SelectableList extends Component {
        static propTypes = {
            children: PropTypes.node.isRequired,
        };

        render() {
            return (
                <ComposedComponent
                    value={this.props.selectedId}
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
