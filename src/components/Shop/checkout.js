import React from 'react';

const Checkout = (props) => {
  const { itemsInCart, handleCheckout, checkingOut } = props;
  if (checkingOut) {
    return (
      <div className="checkout">
        <div>
          <p>Ready to checkout</p>
        </div>

        <div className="items-in-cart">
          {itemsInCart.map((item) => {
            return (
              <div className="item" key={item.id}>
                <div
                  className="images"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                ></div>
                <div className="text">
                  <h4>{item.name}</h4>
                  <p>Montell Fish</p>
                  <div className="subtotal">
                    <p>Total: {item.price} USD</p>
                    <div className="quantity">
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
        <div className="buttons">
          <button>Checkout</button>
          <button onClick={handleCheckout}>Cancel</button>
        </div>
      </div>
    );
  }
};

export default Checkout;
