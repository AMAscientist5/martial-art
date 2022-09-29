import React from 'react';
import './Cart.css';


const Cart = ({cart, handleAddToCart}) => {
    // console.log(cart)
    const {img, name, time, text} = cart;
    return (
        <div className='cart'>
            <img src={img} alt="" />
          <div className='cart-info'>
                <p className='cart-name'>{name}</p>
                <p>{text}</p>
                <p> Practice time: {time}m</p>
          </div>
          <button onClick={() => handleAddToCart(time) } className='btn-cart' >
            <p className='btn-text'>Add to cart</p>
          </button>
        </div>
    );
};

export default Cart;