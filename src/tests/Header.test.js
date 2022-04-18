import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header component', () => {
  test('It renders the site title', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const siteName = screen.getByText(/Stinson Style/i);
    expect(siteName).toBeInTheDocument();
  });

  test('It renders a heading', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const h1 = screen.getByRole('heading');
    expect(h1).toBeInTheDocument();
  });
});
