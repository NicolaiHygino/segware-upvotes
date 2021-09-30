import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '.';

describe('Login component', () => {
  beforeEach(() => {
    render(<Login />);
  })
  
  it('renders a form', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});
