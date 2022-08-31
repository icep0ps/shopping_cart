import React, { useEffect, useState } from 'react';

const Checkout = (props) => {
  const { itemsInCart, handleCheckout, checkingOut } = props;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let calcTotal = 0;
    itemsInCart.forEach((item) => {
      calcTotal += item.price * item.getQuantity;
    });
    setTotal((prevTotal) => (prevTotal = calcTotal));
  }, [itemsInCart]);

  const getAlbum = (itemID) => {
    const filtered = itemsInCart.filter((item) => {
      return item.id === itemID;
    });
    return filtered[0];
  };

  const handleTotalIncrease = (event) => {
    const album = getAlbum(event.target.id);
    album.IncreaseQuantity();
    const price = album.price;
    setTotal((prevTotal) => {
      return prevTotal + price;
    });
  };

  const handleTotalDecrease = (event) => {
    const album = getAlbum(event.target.id);
    if (album.getQuantity > 1) {
      album.DecreaseQuantity();
      const price = album.price;
      setTotal((prevTotal) => {
        return prevTotal - price;
      });
    }
  };

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
                  <p>{item.artits}</p>
                  <div className="subtotal">
                    <p>Price: {item.price} USD</p>
                    <div className="quantity">
                      <button id={item.id} onClick={handleTotalIncrease}>
                        +
                      </button>
                      <p>Quantity: {item.getQuantity}</p>
                      <button id={item.id} onClick={handleTotalDecrease}>
                        -
                      </button>
                    </div>
                  </div>
                </div>
                <button id={item.id} className="remove-from-cart">
                  -
                </button>
              </div>
            );
          })}
        </div>
        <h2>
          Total: <span>{total} USD</span>
        </h2>
        <div className="buttons">
          <button>Checkout</button>
          <button onClick={handleCheckout}>Cancel</button>
        </div>
      </div>
    );
  }
};

export default Checkout;
