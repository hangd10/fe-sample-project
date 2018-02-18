import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import CartComponent from '../components/cartComponent';
import { deleteFromCart } from '../actions/index';

class ProductsCart extends Component {
    closeCartModal() {
        document.getElementById("modalId").style.display = 'none';
    }

    removeFromCart = (item) => {
        // console.log(`Remove item from cart ${JSON.stringify(item)}`);
        this.props.deleteFromCart(item);
    }

    renderCartItems() {
        return _.values(this.props.cart).map( item => {
            return <CartComponent key={ item.id } item={ item } callbackFromCart={ this.removeFromCart } />
        });
    }

    renderTotal() {
        const cartsAsArray = _.values(this.props.cart);
        const total = cartsAsArray.reduce( (total, item) => {
            return total + item.price;
        }, 0);

        return `$ ${(total/ 100).toFixed(2)}`;
    }

    render() {
        return (
            <section className="cartContainer">
                <div><h3>Your Cart</h3></div>
                <div className="cartItems">

                    { this.renderCartItems() }

                    <div className="cartTotal">
                        <div className="cartTotalDescription">
                        <div>Total</div>
                        <div>{ this.renderTotal() }</div>
                        </div>
                    </div>
                </div>
                <div><button className="closeCartButton" onClick={this.closeCartModal}>Back to Shopping</button></div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart : state.cart
    }
}

export default connect(mapStateToProps, { deleteFromCart })(ProductsCart);