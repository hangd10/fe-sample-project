import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    openCartModal() {
        document.getElementById("modalId").style.display = 'block';
    }

    renderCartCount() {
        return Object.keys(this.props.cart).length;
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
                    <span className="cartCount">{ this.renderCartCount() }</span>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart : state.cart
    }
}

export default connect(mapStateToProps)(Header);