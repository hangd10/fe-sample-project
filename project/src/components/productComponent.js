import React, { Component } from 'react';

import ProudctResource from '../resource/ProductResource';
import ItemComponent from './itemComponent';

/**
 * 
 *  Refactored as container/producst_list.js to leverage react redux
 * 
 */
export default class ProductComponent extends Component {
    constructor() {
        super();
        
        this.state = { products : [] };
        this.pr = new ProudctResource();
    }

    componentDidMount() {
        this.pr.getProducts()
            .then(products => {
                this.setState({ products });
            })
            .catch(error => {
                console.log(`ProductResource.getProducts error ${error}`);
            })
    }

    addToCart = (item) => {
        alert(`Item ${ JSON.stringify(item) } added to cart.`);
        
        // TODO : use redux to add item to redux store
    }

    render() {
        const itemComponents = this.state.products.map( item => {
            return <ItemComponent key={ item.id } item={ item } callbackFromProduct={ this.addToCart }/>
        });

        return (
            <section className="itemsContainer">
                { itemComponents }
            </section>
        );
    }
}