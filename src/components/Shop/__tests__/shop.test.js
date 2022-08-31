import React from 'react';
import Shop from '../shop';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';

describe('Shop render', () => {
  it('Has Products section in Document', () => {
    render(
      <Router>
        <Shop inventory={[]} />
      </Router>
    );
    const productsSection = screen.getByTestId('products');
    expect(productsSection).toBeInTheDocument();
  });

  it('Renders all albums in inventory', () => {
    const inventoryMock = [
      { id: 1, name: 'Desire', artist: 'Limoblaze', price: 200 },
      { id: 2, name: 'Thank God', artist: 'Travis', price: 100 },
      { id: 3, name: 'Its Beautifu;', artist: 'Montell Fish', price: 150 },
    ];

    render(
      <Router>
        <Shop inventory={inventoryMock} />
      </Router>
    );

    const products = screen.getAllByTestId('product');
    expect(products.length).toBe(3);
  });
});

describe('Products Render', () => {
  it('Has Add to cart button', () => {
    const inventoryMock = [
      { id: 1, name: 'Desire', artist: 'Limoblaze', price: 200 },
    ];

    render(
      <Router>
        <Shop inventory={inventoryMock} />
      </Router>
    );

    const button = screen.getByRole('button', { name: 'shopping_cart' });
    expect(button).toBeInTheDocument();
  });
});
