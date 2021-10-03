import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getFieldsFillAndSubmit } from './testHelpers';
import App from './App';

describe('App component', () => {
  it('redirect to feed page when signs in successfully', async () => {
    render(<App />);

    getFieldsFillAndSubmit();

    const feedText = await screen.findByText('Feed');
    expect(feedText).toBeInTheDocument();
  });
});