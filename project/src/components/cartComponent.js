import React from 'react';

const cartComponent = (props) => {
    return (
        <div className="cartItem">
            <div><img src={ 'images/' +props.item.filename } alt="" /></div>
            <div className="cartItemDescription">
                <div>{ props.item.name }</div>
                <div className="price">${ (props.item.price / 100).toFixed(2) }</div>
            </div>
            <div className="removeCartButton">
                <span className="fa fa-times" aria-hidden="true" 
                    onClick={ () => props.callbackFromCart(props.item) }>
                </span>
            </div>
        </div>       
    )
}

export default cartComponent;
