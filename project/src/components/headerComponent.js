import React, { Component } from 'react';

export default class HeaderComponent extends Component {
    openCartModal() {
        document.getElementById("modalId").style.display = 'block';
    }

    render() {
        return (
            <header className="App-header">
                <div>
                    <span className="logo"><span className="fa fa-shopping-cart fa-1x" aria-hidden="true"></span> Cart.ly</span>
                    <span className="logoTitle">Shop</span>  
                </div>
                <div>
                    <span className="cartTitle" onClick={this.openCartModal}>Your Cart</span> 
                    <span className="cartCount">2</span>
                </div>
            </header>
        );
    }
}