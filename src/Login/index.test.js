import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '.';

describe('Login component', () => {
  beforeEach(() => {
    render(<Login />);
  })
  
  it('renders a Login text heading', () => {
    expect(screen.getByText('Login', { selector: 'h1' })).toBeInTheDocument();
  });

  it('renders a form', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('has a username input element', () => {
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('has a password input element', () => {
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('has a login button', () => {
    expect(screen.getByText('Login', { selector: 'button'})).toBeInTheDocument();
  });
});
