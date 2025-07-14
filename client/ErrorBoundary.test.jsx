import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from './ErrorBoundary';

function ProblemChild() {
  throw new Error('Error thrown from problem child');
}

test('catches error and displays fallback UI', () => {
  const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

  render(
    <ErrorBoundary>
      <ProblemChild />
    </ErrorBoundary>
  );

  expect(screen.getByText('Something went wrong.')).toBeInTheDocument();

  consoleError.mockRestore();
});
