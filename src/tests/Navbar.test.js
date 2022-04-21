import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  test('It renders a nav element', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  test('It has two links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });

  test('The first link says Products', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveTextContent(/products/i);
  });

  test('The first link redirects to /products', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/products');
  });

  test('The second link says Cart', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links[1]).toHaveTextContent(/cart/i);
  });

  test('The second link redirects to /cart', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links[1]).toHaveAttribute('href', '/cart');
  });
});
