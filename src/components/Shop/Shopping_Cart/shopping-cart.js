import React, { useEffect, useState } from 'react';
import inventory from '../inventory';
import Cart from './cart';

const ShoppingCart = () => {
  const [counter, setCounter] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const changeStatus = () => {
    setCheckout(!checkout);
  };

  const itemAddedToCart = (id) => {
    return inventory.filter((product) => product.id === id);
  };

  const removeFromCart = (itemID) => {
    return itemsInCart.filter((item) => item.id !== itemID);
  };

  const handleAddToCartEvent = (event) => {
    const PRODUCT_ID = event.currentTarget.id;
    setItemsInCart(itemsInCart.concat(itemAddedToCart(PRODUCT_ID)));
    setCounter(counter + 1);
  };

  const handleRmoveFromCartEvent = (event) => {
    const PRODUCT_ID = event.currentTarget.id;
    setItemsInCart(removeFromCart(PRODUCT_ID));
    setCounter(counter - 1);
  };

  useEffect(() => {
    const Addbuttons = document.querySelectorAll('.add-to-cart');
    Addbuttons.forEach((button) => {
      button.addEventListener('click', handleAddToCartEvent);
    });

    const Removebuttons = document.querySelectorAll('.remove-from-cart');
    Removebuttons.forEach((button) => {
      button.addEventListener('click', handleRmoveFromCartEvent);
    });

    return () => {
      Addbuttons.forEach((button) => {
        button.removeEventListener('click', handleAddToCartEvent);
      });

      Removebuttons.forEach((button) => {
        button.removeEventListener('click', handleRmoveFromCartEvent);
      });
    };
  });

  return (
    <Cart
      itemsInCart={itemsInCart}
      checkout={checkout}
      handleCheckout={changeStatus}
      counter={counter}
    />
  );
};
export default ShoppingCart;
