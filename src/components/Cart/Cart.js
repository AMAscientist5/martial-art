import React from 'react';
import './Cart.css';


const Cart = ({cart, handleAddToCart}) => {
    // console.log(cart)
    const {img, name, time, text} = cart;
    return (
        <div className='cart'>
            <img src={img} alt="" />
          <div className='cart-info'>
                <h2 className='cart-name'>{name}</h2>
                <p>{text}</p>
                <h5 className="cart-practice-time"> Practice time: {time}m</h5>
          </div>
          <button onClick={() => handleAddToCart(time) } className='btn-cart' >
            <p className='btn-text'>Add to cart</p>
          </button>
        </div>
    );
};

export default Cart;