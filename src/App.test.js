import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Stinson Style/i);
    expect(linkElement).toBeInTheDocument();
  });
});
