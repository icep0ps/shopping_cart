import React, { useEffect, useState } from 'react';
import inventory from './inventory';
import Checkout from './checkout';

const Cart = (props) => {
  return (
    <div>
      <div
        id="shopping-cart"
        className="material-symbols-rounded"
        onClick={props.handleCheckout}
      >
        shopping_cart
        <span>{props.counter}</span>
      </div>
    </div>
  );
};

const ComponentToRender = (props) => {
  if (props.checkout) {
    return (
      <div>
        <Checkout
          handleCheckout={props.handleCheckout}
          itemsInCart={props.itemsInCart}
        />
        <Cart
          counter={props.counter}
          checkout={props.checkout}
          handleCheckout={props.handleCheckout}
        />
      </div>
    );
  } else {
    return (
      <Cart
        counter={props.counter}
        checkout={props.checkout}
        handleCheckout={props.handleCheckout}
      />
    );
  }
};

const ShoppingCart = () => {
  const [counter, setCounter] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const changeStatus = () => {
    setCheckout(!checkout);
  };

  const isInCartAlready = (product) => {
    return itemsInCart.includes(product) ? false : true;
  };

  useEffect(() => {
    const itemAddedToCart = (id) => {
      console.log(id);
      return inventory.filter((product) => product.id === id);
    };
    const handleAddToCartEvent = (event) => {
      event.stopPropagation();
      event.preventDefault();
      const PRODUCT_ID = event.currentTarget.id;
      setCounter(counter + 1);
      setItemsInCart(itemsInCart.concat(itemAddedToCart(PRODUCT_ID)));
    };

    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach((button) => {
      button.addEventListener('click', handleAddToCartEvent);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', handleAddToCartEvent);
      });
    };
  });

  return (
    <ComponentToRender
      counter={counter}
      checkout={checkout}
      handleCheckout={changeStatus}
      itemsInCart={itemsInCart}
    />
  );
};
export default ShoppingCart;
