import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Checkout from './checkout';
import inventory from '../inventory';

const ShoppingCart = () => {
  const [counter, setCounter] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const location = useLocation();

  const changeStatus = () => {
    setCheckout(!checkout);
  };

  const itemAddedToCart = (id) => {
    return inventory.filter((product) => product.id === id);
  };

  const removeFromCart = (itemID) => {
    const newArray = itemsInCart.filter((item) => item.id !== itemID);
    setItemsInCart(newArray);
  };

  const itemExistsInCart = (PRODUCT_ID) => {
    return itemsInCart.some((item) => item.id === PRODUCT_ID);
  };

  const handleAddToCartEvent = (event) => {
    const PRODUCT_ID = event.currentTarget.id;
    if (!itemExistsInCart(PRODUCT_ID)) {
      setItemsInCart((prevItems) =>
        prevItems.concat(itemAddedToCart(PRODUCT_ID))
      );
      setCounter((prevCount) => prevCount + 1);
    }
  };

  const handleRmoveFromCartEvent = (event) => {
    const PRODUCT_ID = event.currentTarget.id;
    setCounter((prevCount) => prevCount - 1);
    removeFromCart(PRODUCT_ID);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, checkout, counter]);

  return (
    <div>
      <div
        id="shopping-cart"
        className="material-symbols-rounded"
        onClick={changeStatus}
        data-testid="Shopping-cart"
      >
        shopping_cart
        <span>{counter}</span>
      </div>
      <Checkout
        itemsInCart={itemsInCart}
        handleCheckout={changeStatus}
        checkingOut={checkout}
      />
      ;
    </div>
  );
};
export default ShoppingCart;
