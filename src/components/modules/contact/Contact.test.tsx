import React from 'react';
import { render, screen } from '@testing-library/react';
import { Contact } from './Contact';
const { data } = require('../../../utils/lorem-data.json');

test('renders Contact as title', () => {
  render(<Contact />);
  const linkElement = screen.getByText('Contact');
  expect(linkElement).toBeInTheDocument();
});

test('renders Lorem ipum... as content', () => {
    render(<Contact />);
    const linkElement = screen.getByText(data);
    expect(linkElement).toBeInTheDocument();
  });
