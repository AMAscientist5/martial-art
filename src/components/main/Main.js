import React, { useEffect, useState } from 'react';
import CartDetail from '../Cart-Details/CartDetail';
import Cart from '../Cart/Cart';
import './Main.css'

const Main = () => {

    const [time, setTime] = useState(0)
    const [carts, setCart] = useState([])

    useEffect(() => {
      fetch('data.json')
      .then(res => res.json())
      .then(data => setCart(data))
  }, [])

    const handleAddToCart = (selectedCart) => {
      console.log(selectedCart)
      console.log(time)
      if(!time){

      }else{

      }
      setTime(selectedCart)
  }

    return (
     <div className="main-container">
        <div>
             <div className="logo-container">
               <h1>Martial Art</h1>
               <h5>Select Daily Practice</h5>
             </div>
             <div className="cart-container">
            
                {
                carts.map(cart => <Cart key={cart.id} 
                  cart={cart}
                  handleAddToCart={handleAddToCart}
                ></Cart>)
                }
              </div>
            </div>
        <div className="detail-container">
             <CartDetail time={time}></CartDetail>
        </div>
    </div>
    );
};

export default Main;