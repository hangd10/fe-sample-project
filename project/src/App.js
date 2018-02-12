import React, { Component } from 'react';

import HeaderComponent from './components/headerComponent';
import ProductComponent from './components/productComponent';
import CartComponent from './components/cartComponent';
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
      
        <HeaderComponent />

        <div>
            <section><h4 className="shopTitle">Shop our featured Collection</h4></section>
            <ProductComponent />
        </div>

        {/* TODO : Convert Modal to High Order Component for reusability */}
        <div id="modalId" className="modal">
            <div className="modal-content">
                <CartComponent />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
