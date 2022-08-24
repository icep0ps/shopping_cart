import React from 'react';
import inventory from './inventory';
import { Link } from 'react-router-dom';

const Shop = (props) => {
  console.log(props);
  return (
    <div className="store-container">
      <div>
        <h1>Release Radar</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </div>
      <div className="products">
        {inventory.map((tree) => {
          return (
            <div key={tree.id} id="product">
              <Link to={`/shop/ablums/${tree.id}`}>
                <div
                  id="Image"
                  style={{
                    backgroundImage: `url('https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Fa32c4772671773907170a67788e8e5c2.600x600x1.jpg')`,
                  }}
                ></div>
              </Link>
              <div className="product-details">
                <h4>{tree.name}</h4>
                <p>Montell Fish</p>
                <button className="add-to-cart" id={tree.id}>
                  <span className="material-symbols-rounded">
                    shopping_cart
                  </span>
                </button>
                <div className="purchase-details" id={tree.id}>
                  <p id="description">{tree.description}</p>
                  <div className="price">
                    <p id="price">$ {tree.price} </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
