import React from 'react';
import Checkout from '../checkout';

const Cart = (props) => {
  const { counter, handleCheckout, checkout } = props;
  console.log(checkout);
  if (checkout) {
    return (
      <div>
        <Checkout
          handleCheckout={props.handleCheckout}
          itemsInCart={props.itemsInCart}
        />
      </div>
    );
  } else {
    return (
      <div>
        <div
          id="shopping-cart"
          className="material-symbols-rounded"
          onClick={handleCheckout}
        >
          shopping_cart
          <span>{counter}</span>
        </div>
      </div>
    );
  }
};

export default Cart;
