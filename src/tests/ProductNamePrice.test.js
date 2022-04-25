import { render, screen } from '@testing-library/react';
import ProductNamePrice from '../components/ProductNamePrice';

describe('ProductNamePrice component', () => {
  test('It renders the name', () => {
    render(<ProductNamePrice name='Blue shirt' />);
    const name = screen.getByText(/blue shirt/i);
    expect(name).toBeInTheDocument();
  });

  test('It renders the price', () => {
    render(<ProductNamePrice price={40.23} />);
    const price = screen.getByText(/40\.23/g);
    expect(price).toBeInTheDocument();
  });

  test('It renders the price with two decimal places', () => {
    render(<ProductNamePrice price={20} />);
    const price = screen.getByText(/20\.00/g);
    expect(price).toBeInTheDocument();
  });

  test('It renders "Product name" when no name is passed', () => {
    render(<ProductNamePrice />);
    const name = screen.getByText('Product name');
    expect(name).toBeInTheDocument();
  });

  test('It renders "0.00" when no price is passed', () => {
    render(<ProductNamePrice />);
    const price = screen.getByText(/0\.00/g);
    expect(price).toBeInTheDocument();
  });
});
