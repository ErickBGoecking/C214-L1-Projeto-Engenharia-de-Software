import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
  console.log(linkElement)
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/edit/i);
  expect(linkElement).toBeInTheDocument();
});