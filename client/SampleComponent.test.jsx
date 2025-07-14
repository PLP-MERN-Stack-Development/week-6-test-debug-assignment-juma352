import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleComponent from './SampleComponent';

test('renders the text prop', () => {
  render(<SampleComponent text="Hello, World!" />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
