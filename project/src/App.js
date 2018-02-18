import React, { Component } from 'react';

//import HeaderComponent from './components/headerComponent';
// import ProductComponent from './components/productComponent';
// import CartComponent from './components/cartComponent';

import Header from './container/header';
import ProductList from './container/products_list';
import ProductsCart from './container/products_cart';

import './App.css';

class App extends Component {
  openCartModal() {
    document.getElementById("modalId").style.display = 'block';
  }

  closeCartModal() {
    document.getElementById("modalId").style.display = 'none';
  }

  render() {
    return (
      <div className="App">

        <Header />

        <div>
            <section><h4 className="shopTitle">Shop our featured Collection</h4></section>
            <ProductList />
        </div>

        {/* TODO : Convert Modal to High Order Component for reusability */}
        <div id="modalId" className="modal">
            <div className="modal-content">
                {/* <CartComponent /> */}
                <ProductsCart />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
