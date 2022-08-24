import React from 'react';
import ShoppingCart from '../Shop/Shopping_Cart/shopping-cart';

const Nav = () => {
  return (
    <nav>
      <input type="search" placeholder="Find an new album"></input>
      <ShoppingCart />
    </nav>
  );
};

export default Nav;
