import React from 'react';

const Checkout = (props) => {
  const { itemsInCart } = props;

  return (
    <div className="checkout">
      <div>
        <h1>Shopping cart</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
      </div>

      <div className="items-in-cart">
        {itemsInCart.map((item) => {
          return (
            <div className="item" key={item.id}>
              <div
                className="images"
                style={{
                  backgroundImage: `url('https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Fa32c4772671773907170a67788e8e5c2.600x600x1.jpg')`,
                }}
              ></div>
              <div className="text">
                <h4>{item.name}</h4>
                <p>Montell Fish</p>
                <div className="subtotal">
                  <p>Total: {item.price} USD</p>
                  <div class="quantity">
                    <button>+</button>
                    <p>Quantity: 3</p>
                    <button>-</button>
                  </div>
                </div>
              </div>
              <button id={item.id} className="remove-from-cart"></button>
            </div>
          );
        })}
      </div>
      <div class="buttons">
        <button>Checkout</button>
        <button onClick={props.handleCheckout}>Cancel</button>
      </div>
    </div>
  );
};

export default Checkout;
