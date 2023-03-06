import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from './About';
const { data } = require('../../../utils/lorem-data.json');

test('renders About as title', () => {
  render(<About />);
  const linkElement = screen.getByText('About');
  expect(linkElement).toBeInTheDocument();
});

test('renders Lorem ipum... as content', () => {
    render(<About />);
    const linkElement = screen.getByText(data);
    expect(linkElement).toBeInTheDocument();
  });
