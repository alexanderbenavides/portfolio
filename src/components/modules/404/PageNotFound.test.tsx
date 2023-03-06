import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageNotFound } from './PageNotFound';

test('renders Page not found :(', () => {
  render(<PageNotFound />);
  const linkElement = screen.getByText('Page not found :(');
  expect(linkElement).toBeInTheDocument();
});
