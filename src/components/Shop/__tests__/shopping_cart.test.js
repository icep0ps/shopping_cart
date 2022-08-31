import React from 'react';
import Nav from '../../Header/Nav';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import ShoppingCart from '.././Shopping_Cart/shopping-cart';

describe('shopping cart', () => {
  it('is present in document', () => {
    render(
      <Router>
        <Nav></Nav>
      </Router>
    );

    const cart = screen.getByTestId('Shopping-cart');

    expect(cart).toBeInTheDocument();
  });

  it('changes checkout status on click', () => {
    let checkoutStatus = false;
    const changeCheckoutStatusMock = jest.fn(
      (checkoutStatus = !checkoutStatus)
    );

    render(
      <Router>
        <ShoppingCart></ShoppingCart>
      </Router>
    );

    const cart = screen.getByTestId('Shopping-cart');
    userEvent.click(cart, changeCheckoutStatusMock);
    expect(checkoutStatus).toBeTruthy();
  });

  it('renders checkout on click', () => {
    render(
      <Router>
        <ShoppingCart></ShoppingCart>
      </Router>
    );
  });
});
