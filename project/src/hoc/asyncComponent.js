import React, { Component } from 'react';

// High Order Component to dynamically load components to improve performance

// TODO : Use this for Cart (and other components...)

// importComponent is a function...
const AsyncComponent = (importComponent) => {
    return class extends Component {
        constructor() {
            super();
            this.state = { component : null }
        }

        componentDidMount() {
            importComponent()
                // cmp.default is the component we will load dynamically
                .then(cmp => { this.setState({ component: cmp.default }) });
        }

        render() {
            const C = this.state.component;
            return C ? <C { ...this.props } /> : null;
        }
    }
}

export default AsyncComponent;