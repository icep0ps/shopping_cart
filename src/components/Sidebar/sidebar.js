import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
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
    <div className="sidebar">
      <div>
        <h3>
          <i className="fa-solid fa-circle-play "></i>
          Release's
        </h3>
      </div>

      <ul>
        <Link to="/">
          <li onClick={addAtiveClass}>
            <i className="fa-solid fa-house fa-lg	"></i>
            Home
          </li>
        </Link>
        <Link to="/shop">
          <li onClick={addAtiveClass}>
            <i className="fa-solid fa-bag-shopping fa-lg	"></i>
            Shop
          </li>
        </Link>
        <Link to="/about">
          <li onClick={addAtiveClass}>
            <i className="fa-solid fa-circle-info fa-lg	"></i>
            About
          </li>
        </Link>
        <Link to="/">
          <li onClick={addAtiveClass}>
            <i className="fa-solid fa-house fa-lg	"></i>
            Artists
          </li>
        </Link>
        <Link to="/shop">
          <li onClick={addAtiveClass}>
            <i className="fa-solid fa-bag-shopping fa-lg	"></i>
            Trending
          </li>
        </Link>
        <Link to="/about">
          <li onClick={addAtiveClass}>
            <i className="fa-solid fa-circle-info fa-lg	"></i>
            Charts
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
