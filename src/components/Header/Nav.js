import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../Shop/Shopping_Cart/shopping-cart';

const Nav = () => {
  const addAtiveClass = (event) => {
    const clickedLink = event.target.innerText;
    const links = document.querySelectorAll('li');
    const add = Array.from(links).filter(
      (link) => link.innerText === clickedLink
    );
    Array.from(links).map((li) => li.classList.remove('active'));
    add.map((li) => li.classList.add('active'));
  };
  return (
    <nav>
      <h3>Release</h3>
      <ul>
        <Link to="/">
          <li onClick={addAtiveClass}>Home</li>
        </Link>
        <Link to="/shop">
          <li onClick={addAtiveClass}>Shop</li>
        </Link>
        <Link to="#">
          <li onClick={addAtiveClass}>Artists</li>
        </Link>
        <Link to="#">
          <li onClick={addAtiveClass}>Trending</li>
        </Link>
        <Link to="#">
          <li onClick={addAtiveClass}>Charts</li>
        </Link>
      </ul>
      <ShoppingCart />
    </nav>
  );
};

export default Nav;
