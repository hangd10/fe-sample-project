import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import ItemComponent from '../components/itemComponent';
import { addToCart } from '../actions/index';

class ProductsList extends Component {
    componentDidMount() {
        // TODO : Make API call
    }

    addToCart = (item) => {
        //alert(`Item ${ JSON.stringify(item) } added to cart.`);
        
        // TODO : use redux to add item to redux store
        this.props.addToCart(item);
    }

    render() {
        const itemComponents = _.values(this.props.products).map( item => {
            return <ItemComponent key={ item.id } item={ item } callbackFromProduct={ this.addToCart }/>
        });

        return (
            <section className="itemsContainer">
                { itemComponents }
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        products : state.products
    }
}

export default connect(mapStateToProps, { addToCart })(ProductsList);