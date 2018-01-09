import React, {Component} from 'react';
import ReactDom from "react-dom";
import {connect} from 'react-redux';
import {throttle} from "../../helpers/perfomans";
import {resize} from "../../actions";


function wrapComponentWithResize(ComposedComponent, propsElName) {
    const mapStateToProps = state => {
        return {
            stylesElement: state.styles[propsElName],
        }
    };

    const mapDispatchToProps = dispatch => {
        return {
            resize: ({height}) => {
                dispatch(resize[`resize${propsElName[0].toUpperCase() + propsElName.slice(1)}`]({height}));
            },
        }
    };

    class ComponentWithResize extends Component {
        state = {
            node: null
        };

        componentDidMount() {
            this.setState({
                node: ReactDom.findDOMNode(this.refs.component),
            }, () => {
                window.addEventListener('resize', this.onResize);
                this.onResize();
            });
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.onResize);
        }

        onResizeBase = () => {
            const height = this.state.node.clientHeight;

            if (this.state.node.clientHeight !== this.props.stylesElement.height) {
                this.props.resize({height});
            }
        };

        onResize = throttle(this.onResizeBase, 300);

        render() {
            return (
                <ComposedComponent
                    ref='component'
                    {...this.props}
                >
                    {this.props.children}
                </ComposedComponent>
            );
        }
    }

    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(ComponentWithResize);
}

export default wrapComponentWithResize;
