import React from 'react';
import { Editors } from '../Shop/inventory';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <div className="hero">
        <div className="homepage-text">
          <h1>Camp lukewarm Out Now</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <button>Purchase Album</button>
          <button>Listen on YouTube</button>
        </div>
      </div>
      <div className="editors-container">
        <h1>Editor's Picks</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <div className="products">
          {Editors.map((item) => {
            return (
              <div key={item.id} id="product">
                <Link to={`/shop/${item.id}`}>
                  <div
                    id="Image"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                    }}
                  ></div>
                </Link>
                <div className="product-details">
                  <h4>{item.name}</h4>
                  <p>{item.artist}</p>
                  <button className="add-to-cart" id={item.id}>
                    <span className="material-symbols-rounded">
                      shopping_cart
                    </span>
                  </button>
                  <div className="purchase-details" id={item.id}>
                    <p id="description">{item.description}</p>
                    <div className="price">
                      <p id="price">$ {item.price} </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Home;
