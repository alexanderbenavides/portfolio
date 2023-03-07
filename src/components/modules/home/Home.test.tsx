import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';
const { data } = require('../../../utils/lorem-data.json');

test('renders Contact as title', () => {
  render(<Home />);
  const button = screen.queryAllByRole('h3.intro');
  const linkElement = screen.getByText('h3.intro');
  expect(linkElement).toBeInTheDocument();
});

test('renders Lorem ipum... as content', () => {
    render(<Home />);
    const linkElement = screen.getByText(data);
    expect(linkElement).toBeInTheDocument();
  });
