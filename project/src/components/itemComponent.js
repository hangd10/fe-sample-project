import React, { Component } from 'react';

const itemComponent = (props) => {
    return (
        <div className="itemContainer">
            <div><img src={ 'images/' +props.item.filename } /></div>
            <div className="name">{ props.item.name }</div>
            <div className="price">${ (props.item.price / 100).toFixed(2) }</div>
            <div><button className="addToCartButton" onClick={ () => props.callbackFromProduct(props.item) }>Add to cart</button></div>
        </div>
    );    
}

export default itemComponent;