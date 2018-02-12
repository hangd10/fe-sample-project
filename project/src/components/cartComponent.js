import React, { Component } from 'react';

export default class CartComponent extends Component {
    closeCartModal() {
        document.getElementById("modalId").style.display = 'none';
    }

    render() {
        return (
            <section className="cartContainer">
                <div><h3>Your Cart</h3></div>
                <div className="cartItems">
                    <div className="cartItem">
                        <div><img src="images/649597850.png" alt="" /></div>
                        <div className="cartItemDescription">
                            <div>Men's Work Shirt</div>
                            <div className="price">$3.97</div>
                        </div>
                        <div><span className="fa fa-times" aria-hidden="true"></span></div>
                    </div>

                    <div className="cartItem">
                        <div><img src="images/618842634.png" alt="" /></div>
                        <div className="cartItemDescription">
                            <div>Casual Jacket</div>
                            <div className="price">$57.04</div>
                        </div>
                        <div><span className="fa fa-times" aria-hidden="true"></span></div>
                    </div>

                    <div className="cartTotal">
                        <div className="cartTotalDescription">
                        <div>Total</div>
                        <div>$61.01</div>
                        </div>
                    </div>
                </div>
                <div><button className="closeCartButton" onClick={this.closeCartModal}>Back to Shopping</button></div>
            </section>
        )
    }
}