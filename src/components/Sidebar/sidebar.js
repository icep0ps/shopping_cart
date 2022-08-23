import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <h3>
          <i class="fa-solid fa-circle-play "></i>
          Release's
        </h3>
      </div>

      <ul>
        <Link to="/">
          <li>
            <i class="fa-solid fa-house fa-lg	"></i>
            Home
          </li>
        </Link>
        <Link to="/shop">
          <li>
            <i class="fa-solid fa-bag-shopping fa-lg	"></i>
            Shop
          </li>
        </Link>
        <Link to="/about">
          <li>
            <i class="fa-solid fa-circle-info fa-lg	"></i>
            About
          </li>
        </Link>
        <Link to="/">
          <li>
            <i class="fa-solid fa-house fa-lg	"></i>
            Home
          </li>
        </Link>
        <Link to="/shop">
          <li>
            <i class="fa-solid fa-bag-shopping fa-lg	"></i>
            Shop
          </li>
        </Link>
        <Link to="/about">
          <li>
            <i class="fa-solid fa-circle-info fa-lg	"></i>
            About
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
